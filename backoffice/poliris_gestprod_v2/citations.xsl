<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<link type="text/css" rel="stylesheet" href="style_xml.css" />
		</head>
		<body>
			<xsl:for-each select="dossiers/dossier/expression">
			<table>
				<caption><xsl:value-of select="name"/></caption>
				<tr>
					<th>Moteur de recherche</th>
					<th>Page</th>
					<th>Position</th>
					<th>Date</th>
				</tr>
				<xsl:for-each select="enginename">
				<tr class="tr{position() mod 2}">
					<td><xsl:value-of select="name"/></td>
					<td><xsl:value-of select="page"/></td>
					<td><xsl:value-of select="pos"/></td>
					<xsl:variable name="date" select="dt"/>
					<td><xsl:value-of select="concat(substring($date, 9, 2), '/', substring($date, 6, 2), '/', substring($date,1,4))"/></td>
				</tr>
				</xsl:for-each>
			</table>
			</xsl:for-each>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>