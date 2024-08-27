## ENVIRONMENT VARIABLES
VITE_ADMIN_EMAIL
VITE_ADMIN_WA_NUMBER
VITE_WA_CTA_HELLO_MSG
VITE_HOST

## TODO:
1. animate landing-page elements (DONE)
2. put link on past-project cards (DONE)
3. dropdown of services to select service landing page (DONE)
4. fix navbar menu item cannot be clicked on landing page (DONE)
5. mobile responsiveness (DONE)
6. make LP for other services: Online Shop, Company Profile, Custom Software (DONE)
7. make LP for en language (DONE)
8. error: type link manually (eg: http://localhost:5173/id/landing-page?referral=123) is 500 internal error (DONE)
9. fix error when type directly the url (DONE) -> for now, using searchParams will needed to put .html in the last paramId (eg: domain.com/landing-page?referral=123). already put .htaccess code to accept page without needing to put .html on the url
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$      $1.html
```
10. accept host/service-name -> redirect to Indonesian lang as default (host/id/service-name) (DONE)