<%@ Import NameSpace="Id3" %>
<%@ Import NameSpace="Id3.WebEngine" %>
<%@ Import NameSpace="System.IO" %>
<%@ Import NameSpace="System.Threading" %>
<SCRIPT language="C#" runat="Server">

// Nom du cookie de session.
const string COOKIE_NAME = "PolirisStats";

// Créer un gif de 1x1 avec Bitmap et le sauver sur OutputStream produit une image de 807 octets. Alors que les 49 octets ci-dessous suffisent finalement...
static readonly byte[] EMPTY_GIF	= { 0x47,0x49,0x46,0x38,0x39,0x61,0x01,0x00,0x01,0x00,0x80,0xFF,0x00,0xC0,0xC0,0xC0,0x00,0x00,0x00,0x21,0xF9,0x04,0x01,0x00,0x00,0x00,0x00,0x2C,0x00,0x00,0x00,0x00,0x01,0x00,0x01,0x00,0x40,0x02,0x02,0x44,0x01,0x00,0x3B,0xED,0x0F,0x63,0x2B,0x00,0x3B };
static readonly byte[] EMPTY_WBMP	= { 0x00,0x00,0x01,0x01,0x80 };

// Entry point
public void Page_Load(Object sender, EventArgs e)
{
	Response.CacheControl = "no-cache";
	Response.Expires = -1;

	string login = Request.QueryString["l"];
	if ( (login != null) && (login != "") )
	{
		string page = Request.QueryString["p"];
		if ( (page == null) || (page == "") )
			if (Request.UrlReferrer != null)
				page = Request.UrlReferrer.ToString();
			else
				page = null;

		if (page != null)
		{
			string hostName = null;

			if (page.StartsWith("http://"))
			{
				int iPos = page.IndexOf('/', 7);
				if (iPos >= 0)
				{
					hostName = page.Substring(7, iPos-7);
					page = page.Substring(iPos);
				}
				else page = "/";
			}
			else if (page[0] != '/') page = "/" + page;

			if (hostName == null) hostName = Funcs.GetServerName();

			string ip = Funcs.GetRemoteAddr();
			string userAgent = Request.UserAgent;
			string sessionId = Funcs.Cookie(COOKIE_NAME);
			if (sessionId == null)
			{
				sessionId = Funcs.GetUniqueID(ip, userAgent);

				HttpCookie cookie = new HttpCookie(COOKIE_NAME, sessionId);
				cookie.Domain = "." + Funcs.GetMainHost(HttpContext.Current.Request.ServerVariables["SERVER_NAME"]);

				Response.AppendHeader("P3P", "policyref=\"http://v2.cnxweb.com/w3c/p3p.xml\", CP=\"NOI DSP COR IND ADMa DEVa OUR UNI COM NAV\"");
				Response.Cookies.Add(cookie);
			}

			StringBuilder sb = new StringBuilder(200);

			sb.Append(' ');
			sb.Append( ip );
			sb.Append(' ');
			sb.Append( ToLog(sessionId, "-") );
			sb.Append(' ');
			sb.Append( ToLog(hostName, "-") );
			sb.Append(' ');
			sb.Append( ToLog(login, "-") );
			sb.Append(' ');
			sb.Append( ToLog(page, "-") );
			sb.Append(' ');
			sb.Append( Funcs.ForceUShort(Request.QueryString["t"]) );
			sb.Append(' ');
			sb.Append( ToLog(userAgent, "-") );
			sb.Append(' ');
			sb.Append( ToLog(Request.QueryString["r"], "-") );
			sb.Append(' ');
			sb.Append( ToLog(Request.QueryString["a"], "-") );
			sb.Append(' ');
			sb.Append( Funcs.ForceUShort(Request.QueryString["w"]) );
			sb.Append(' ');
			sb.Append( Funcs.ForceUShort(Request.QueryString["h"]) );

			sb.Replace("\r",null).Replace("\n",null);

			((LogWriter)Application["ID3xLogWriter"]).WriteLog( sb.ToString() );
		}
	}

	string url = Request.QueryString["u"];
	if (url==null || url=="")
	{
		bool isWbmp = false;
		string[] aAccept = Request.AcceptTypes;
		if (
			(aAccept != null) &&
			(Array.IndexOf(aAccept, "image/gif") == -1) &&
			( (Array.IndexOf(aAccept, "image/vnd.wap.wbmp") >= 0) || (Array.IndexOf(aAccept, "text/vnd.wap.wml") >= 0) )
		) isWbmp = true;
	
		if (isWbmp)
		{
			Response.ContentType = "image/vnd.wap.wbmp";
			Response.BinaryWrite(EMPTY_WBMP);
		}
		else
		{
			Response.ContentType = "image/gif";
			Response.BinaryWrite(EMPTY_GIF);
		}
	}
	else
	{
		Response.Redirect(url);
	}
}

string ToLog(string s, string rep)
{
	if (s==null || s=="") return rep;
	else return s.Replace(' ','+');
}

</SCRIPT>
