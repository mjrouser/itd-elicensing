##ITD-eLicensing 

###Portal Purpose & Version Timeline
Intended to be the front page and entry point for all commonwealth licensing and permitting.  

V. 1.0 utilizes the commonwealth's Google search appliance to provide a search functionality and simple links to pages for further information and applications can be found.

V. 2.0 will utilize a business logic wizard provided by a vendor that walks potential applicants through a series of questions, and informs said applicants of the licenses/permits they need to appy for.

V. 3.0 connects the wizard interface to the Accela back-end so that they are able to begin their application imediately and on-line.

###Architecture/Dev-Ops
See accompanying PDF in `docs` folder for diagrams with IP address of dev and test boxes, as well as for the Google search appliance.

For access to the code base, contact [Rob Powell](mailto: Rob.Powell@MassMail.State.MA.US) and request access to the Github repository

For access to the Google search appliance, contact [Joe Galluccio](mailto: Joseph.Galluccio@MassMail.State.MA.US).  Be prepared to supply your static IP address.

For access to the Dev and Testing Environments, contact [Elliot Gerberg](mailto: Elliot.Gerberg@MassMail.State.MA.US). Static IP is required.  

Once you have access to the Dev/Test boxes, you can use SFTP to deploy (Cyberduck and Filezilla are both useful clients for this).  Both boxes are set up with vanilla Apache with Tomcat.


###Problems/Issues
The GSA throws CORS errors when queried with AJAX calls.  This will have to be overcome in order to use a standard `GET` call.  Currently, `app/scripts/services/fetch.js` has code written for both `GET` and `JSONP`. 

The callack on line 19 of `app/scripts/services/gsaservice.js` can be edited to use either method. Simply replace `Fetch.jsonpQuery` with `Fetch.get`, or vice versa. 

The provided MassIT GSA stylesheet has been replaced to return JSON rather than XSL. This makes the client side code simpler as JSON is a natively consumable object for Angular, however the GSA is also tagging the returned document with a 'Text/HTML' MIME type.  Chrome refuses to execute the JSONp callback, so it only works in Firefox.

In order to keep the JSON output, the MIME type will have to change.  Otherwise the XSLT can be reinstated, and the retuned XSL will have to be converted.