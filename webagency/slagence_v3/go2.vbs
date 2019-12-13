'-*-*
'*--------- le demenageur
Set oFM = CreateObject( "SoftArtisans.FileManager" )
Set ISF = CREATEOBJECT("Scripting.FileSystemObject")
Set WshShell = WScript.CreateObject("WScript.Shell")
Set ftp = WScript.CreateObject("axFtpClient.FTD")
Set dic=wscript.CreateObject("Scripting.Dictionary")
set socket = wscript.CreateObject( "Socket.TCP" )

	cfg_rep="seloger"
app_path="e:\id3\z\"
'ftpcmd="open ledemenageur.seloger.com"&vbcrlf&"seloger"&vbcrlf&"regoles"&vbcrlf&"cd acceptance"&vbcrlf

Set regEx = New RegExp

Sub Writefile (nom,texte)
	On Error Resume Next
	IF ISF.FILEEXISTS(nom) Then isf.deletefile (nom )

	Set myfile=isf.createtextfile (nom, true)
	myfile.write (texte)
	myfile.close
	On Error GoTo 0
End Sub

FUNCTION fINCL (fichier)
'-*-**-*-*- va chercher un fichier sans le traiter ..


'wscript.echo "   "&fichier
	IF ISF.FILEEXISTS(fichier) THEN
On Error Resume Next
		Set A = isf.openTextFile(fichier, 1)
		g= A.READALL
		A.CLOSE
On Error GoTo 0
	End IF
		g=replace(g,"$$E:SELOGER:INFOS$$","")
		g=replace(g,"$$SELOGER:INFOS:NBANN$$",nbann)
		g=replace(g,"$$SELOGER:INFOS:MAJ$$",maj)
		g=replace(g,"$$DYN:DATE:1$$",date_1)

	fINCL=g
END FUNCTION

Sub List_(Base,plus)
If plus<>"" Then ftp.changefolder plus
 Set f = isf.GetFolder(base)
 Set fc = f.Subfolders
 For Each f1 in fc
  List_ base & "\" & f1.name,f1.name
 Next
 
 Set fc = f.Files
 For Each f1 in fc
 ' wscript.echo base & "\" & f1.name
If Left(f1.name,4)<>"gen_" Then makefile f1.name,base
 Next
ftp.changefolder "../"
'ftpcmd=ftpcmd+"cd .."&vbcrlf
End Sub


function makefile (nom,path)

g=fINCL(path&"\"&nom)
	'-**--*--**- si on a pas eu une page cachée, on la traite

		'*- includes
		regEx.Pattern = "\$\$INCL:([^$]*)\$\$"
		regEx.IgnoreCase = True
		regEx.Global = false
		Do While regex.test (g)=true
		Set matches = regEx.Execute(g)
		page_include=fINCL (app_path&cfg_rep&"\incl_"&matches.item(0).subexp(1))
		'*-*-*-*- met en cache la dependance
		g=replace(g,matches.item(0),page_include)
		loop
'	writefile path&"\gen_"&nom,g
On Error Resume Next
	ftp.deletefile nom
On Error GoTo 0
'	ftpcmd=ftpcmd+"dele "&nom&vbcrlf
	ftp.makefile nom,g,false
	wscript.echo nom
	'ftpcmd=ftpcmd+"put "&path&"\gen_"&nom&" "&nom&vbcrlf

end Function

function geturl(url)
	url=replace(url,"http://","")
	positionslash=instr(url,"/")
	domaine=left(url,positionslash-1)
	url=mid(url,positionslash)
	socket.Host = domaine + ":80"
	socket.timeout=5000
	'wscript.echo domaine&" - "&url
	on error resume next
	socket.Open()
	socket.SendLine( "GET "& url & " HTTP/1.0"& vbcrlf & "User-Agent: Mozilla/4.0 (compatible; MSIE 4.01; Windows 98)"&vbcrlf& "From: 212.11.11.51"&vbcrlf& "Host: "& domaine & vbcrlf )
	on error resume next
	socket.WaitForDisconnect()
	pageweb = socket.buffer
	socket.Close()
	geturl=pageweb
'wscript.echo geturl
end function

page=geturl("v2.seloger.com/seloger_data.htm")
page=Mid(page,InStr(page,vbcrlf+vbcrlf)+4)
nbann=Mid(page,1,InStr(page,vbcrlf)-1)
page=Mid(page,InStr(page,vbcrlf)+2)
maj=Mid(page,1,InStr(page,vbcrlf)-1)
'page=Mid(page,InStr(page,vbcrlf)+2)
'date_1=Mid(page,1,InStr(page,vbcrlf)-1)
ftp.open "ledemenageur.seloger.com","seloger","regoles"
ftp.changefolder "production"
list_ app_path+cfg_rep+"\ledem",""
ftp.close
'Writefile "d:\ledem.ftp",ftpcmd
'wshShell.run "c:\winnt\system32\ftp.exe -s:d:\ledem.ftp",1,true
