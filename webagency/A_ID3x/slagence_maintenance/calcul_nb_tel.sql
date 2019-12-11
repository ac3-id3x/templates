SELECT count(a.idannonce)nb_annonces  , LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2) telephone 
FROM annonces a 
INNER JOIN publication p ON p.idannonce=a.idannonce 
INNER JOIN agences ap ON ap.idpublication=p.idpublication 
 WHERE a.idtypetransaction=1 
AND ap.idtypepublication=1 
 AND ap.si_kiosque=1 
 AND ISNUMERIC(LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone 
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))=1
group by LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2)

SELECT count(a.idannonce)nb_annonces  , LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2) telephone 
FROM annonces a 
INNER JOIN publication p ON p.idannonce=a.idannonce 
INNER JOIN agences ap ON ap.idpublication=p.idpublication 
 WHERE a.idtypetransaction=1 
AND ap.idtypepublication=1 
 AND ISNUMERIC(LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone 
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))=1
group by LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2)

SELECT count (distinct ( LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))) as nbagences , LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2) telephone 
FROM annonces a 
INNER JOIN publication p ON p.idannonce=a.idannonce 
INNER JOIN agences ap ON ap.idpublication=p.idpublication 
 WHERE a.idtypetransaction=1 
AND ap.idtypepublication=1 
 AND ap.si_kiosque=1 
 AND ISNUMERIC(LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone 
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))=1
group by LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2)


SELECT count (distinct ( LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))) as nbagences, LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2) telephone 
FROM annonces a 
INNER JOIN publication p ON p.idannonce=a.idannonce 
INNER JOIN agences ap ON ap.idpublication=p.idpublication 
 WHERE a.idtypetransaction=1 
AND ap.idtypepublication=1 
 AND ISNUMERIC(LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone 
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 10))=1
group by LEFT(CASE WHEN a.telephone IS NOT NULL THEN a.telephone
 ELSE CASE WHEN ap.telloc IS NOT NULL THEN ap.telloc ELSE ap.tel END END, 2)