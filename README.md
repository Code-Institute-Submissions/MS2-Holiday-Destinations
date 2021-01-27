# MS2-Holiday-Destinations
This site is intended for people of all walks of life who seek a break from life's everyday's woes. A dream destination, complete with chosen perks, or not...

The site aims to provide an idea of what's in store for your desired outcome, whether it be country or activity, and what it will take to achieve it.

## UX
---
This site will focus on families of all sizes, whether they are alone or as a couple shouldn't matter. We want to help families find their desired holiday destination.

Therefore, as a person seeking a break-

Or as a person who is just browsing for ideas-

* *I want to be able to locate a desired country/city*
* *Where would I live, for the duration of the holiday? Hotels?*
* *How will I book a desired choice?*
* *I want to contact the site owners without booking?*

Wireframes are provided/linked below: (included are wireframes for 3 major devices; **Desktop**, **Mobile**, and **Tablet**)

https://github.com/Windmost8/MS2-Holiday-Destinations/blob/05945a29021a7b2c8190721a5f4784d3f0a448b7/wireframes/allwireframesms2.pdf

(Alternatively, they may be found inside the "wireframes" folder directory)

The results of the project differ slightly with the wireframes. Mostly noticeable is the abscence of an "About" page, which in this case was merged into 1 page.
There are other things such as certain buttons that have been removed and had their functionality handled elsewhere. In general, the spirit of the wireframes is still there.
No functionaliy was removed, only reformed.

---

## Features
---
* **Home**  
    * *Feature 1* - Header logo, onclick refreshes pages.
    * *Feature 2* - Introductory paragraph explaining premise and functionality.
* **Map**   
    * *Feature 1* - Country select dropdown menu and search input autocomplete field.
    * *Feature 2* - Interactive map, changing based on country and city options. Also freedom of exploration through mouse/fingers.
    * *Feature 3* - Map labels, showcasing relevant information, including links that open up in a new tab, as well as hotel markers shown after selection options.
* **Card**   
    * *Feature 1* - Image shown based on location.
    * *Feature 2* - Information fields updated based on location.
    * *Feature 3* - Name links open up in new tab.
    * *Feature 4* - Continue button shows hidden form and scrolls down, automatically filling up destination field based on selected hotel marker.
* **Booking Form**   
    * *Feature 1* - Input fields to be filled in order to proceed with booking.
    * *Feature 2* - Optional message/comments field.
    * *Feature 3* - Email sent to user or given email with relevant information.
    * *Feature 4* - Reserve button hides form again and intiates modal pop up with ok button refreshing page.
* **Inquiry Form**   
    * *Feature 1* - Small card button with question mark, stuck with you as you scroll down
    * *Feature 2* - Input fields to be filled if wished to inquire.
    * *Feature 3* - Email sent to user or given email with relevant information.
    * *Feature 4* - Send button closes form again and intiates modal pop up with ok button refreshing page. Or cancel button to cancel.
* **Footer**  
    * *Feature 1* - Links to generic social medias.

* **Features to be Developed**  
    * *Feature 1* - Price ranges. 
    * *Feature 2* - Markers for certain actitives.

---

# Technologies/Programs Used
* HTML 
* CSS 
* Bootstrap 4 *(for their extensive library and responsiveness)*
* JavaScript
* Jquery *(for easier use of certain functions)*
* Google Maps Javascript API/Places API *(in order to utilize an interactive map and searchabiltiy)*
* Chrome Dev Tools 
* Lighthouse Audits
* Github
* Gitpod
* Google Cloud Platform
* EmailJs *(for their ease of email sending forms)*

---

# Typography/Color Sceheme

Typography includes bootstrap classes. No specific typography was chosen for this project. Certain sizes 
for the text were delivered depending on function, such as bold letters/words for emphasis, and smaller letter sizing for
important distinctions. 

Color scheme included black for buttons/interactions alongside the header and the footer, and white text when used ontop of those.

---

## Testing
---
* **Test Cases**
    * ***Select/Search*** - Selecting a country should properly zoom map to it's location. After selecting a country,
    typing in the city search field should correctly suggest cities in the respective country. Chaning a country should
    reset the city search input. 
    * ***Map*** - When selecting a city, green markers marked with letters from A-Z should incrementally pop up.
    * ***Card*** - Selecting a specific country should correctly showcase it's image in the card. After selecing a hotel marker
    and then changing, the card should update respectively, without any previous information carrying over.
    * ***Booking Form*** - Clicking on the Continue button in the card should display the hidden form and scroll you down there. Should you fill the form slightly without submitting, clicking the continue button again
    should refresh it. After selecting a hotel and then clicking the continue button, the destination field in the form should be filled with the selected location. Attempting to submit the form through the reserve button
    without filling all the fields (with the exception of the message (textarea) field) should correctly show error tooltips. Succesfully submitting however should then hide the
    form again and prompt a modal pop up with an "Ok" button. Clicking this button should close the modal and refresh the page. An email should've been sent to the emailadress of the email input.
    * ***Inquiry Form*** - Cliking the inquiry button should open up a modal with relative input fields. There are two buttons, close and send. Closing should correctly close the modal, or clicking outside the modal as well.
    Attempting to send however, without the fields filled should showcase error tooltips. After succesfully submitting through the send button, another modal should pop up alongside it's "Ok" button, which then refreshes the page.
    * ***Links*** - All links, whether in the footer, or in the map/card should open up the correct path and a new tab.

### Screenshots -
All screenshots can be found in the screenshots folder inside the assets folder in the directory,
or viewed from this link; https://github.com/Windmost8/MS2-Holiday-Destinations/tree/96deb02b2363c0bf73e043e3c3b78dcea09b87a6/screenshots

The screenshots include both desktop and mobile pictures, indicating the intended output.
Such as;
1. When the page loads
2. When you select country and city and hotel
3. When clicking the continue button
4. When clicking on the reserve button
5. When clicking on the Inquire menu navigation
6. Modal Pop ups.

HTML code was validated through https://validator.w3.org/

CSS code was validated through https://jigsaw.w3.org/css-validator/

JS code was validated through https://jshint.com/ 
(the exception in this case, two warnings for dot notations on lines 92 and 93 in the map.js file, instead of square brackets, however
changing this altered the results slightly, so I opted to keep it as it was.)


* **Issues**  
    * At times, whilst previewing the site through port 8000 on gitpod and refreshing the page to update changed code, 
the refresh might not always go through, and therefore one must 
ctrl-click the refresh button for a forced refresh. 

    * Since the google maps API we are using is for development purposes only, it may appear slightly greyed, 
    and also show a popup message on the map itself mentioning that the map did not load correctly. The map works regardless
    of this however, so we just click ok and continue like normal. Also, at times, when refreshing the page, the map may not display
    itself at all, and be completey greyed out, mentioning that something went wrong. To solve this, enabling billing in google cloud platforms works.

    * Emailjs has a limited number of emails able to be sent.

---

## Deployment
---
* **Gitpod** 
    * To preview site through gitpod, run the command "python3 -m http.server" in the terminal (without the quotes). 
    * Executing this should prompt a pop up for port 8000
    alongside the options to "Make Public" or "Open Browser". If it is the first time after opening gitpod, then click on "Make Public", and then "Open Browser" if the pop up
    comes up again. If the pop up does not come, you may alternatively ctrl-click on the link that will be shown in the terminal for port 8000.
    * Gitpod has no automatic saving, so saving after each change is optimal.


* **Github** - Deployment was done through github pages. The documentation of which can be found here: https://pages.github.com/ 
Through the settings of the repository, in the options menu, scrolling down to GitHub pages and saving and publishing through there. 
It took some time to deploy, but eventually after some minutes the site was up.
The deployed site is functional and succesfull. The link is here; https://windmost8.github.io/MS2-Holiday-Destinations/index.html
    * In order to deploy the site, you must do so through the settings option in the repository that the project is contained in. In the settings, scrolling down
    the page untill GitHub Pages.
    * Once there, you may save by clicking the button "Save" and await its deployment. It may take some minutes untill is is deployed, and the site URL will also be highlighted
    in green once it has succesfully deployed.
    * Documentation of Github pages can be found here https://pages.github.com/
    and the fully deployed site is here: https://windmost8.github.io/MS2-Holiday-Destinations/
    * In order to commit, whilst still in gitpod, running the command git add . (or a specific file/folder instead of "." (without the quotes)),
    will add all the changes you have done to be prepared for a commit. 
    * After this step, you may run the command git commit -m "your comment" (your comment being whatever message you want to convey alongside the commit). Running this will 
    show how much changes were done, through the terminal.
    * Finally, running the command git push should put your changes and project into your repository.


---

## Credits 
---
In additon to the API's used, a portion of the code used in the map.js folder is to be credited to Google; https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#maps_places_autocomplete_hotelsearch-javascript

All images were taken from their respective offical wikipeadia links;

Australia: https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/188px-Flag_of_Australia_%28converted%29.svg.png

Brazil: https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/188px-Flag_of_Brazil.svg.png

Canada: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/188px-Flag_of_Canada_%28Pantone%29.svg.png

France: https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png

Germany: https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/188px-Flag_of_Germany.svg.png

Italy: https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/188px-Flag_of_Italy.svg.png

Mexico: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/188px-Flag_of_Mexico.svg.png

New Zealand: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/188px-Flag_of_New_Zealand.svg.png

Portugal: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/188px-Flag_of_Portugal.svg.png

South Africa: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/188px-Flag_of_South_Africa.svg.png

Spain: https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/188px-Flag_of_Spain.svg.png

United Kingdom: https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/188px-Flag_of_the_United_Kingdom.svg.png

United States of America: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/188px-Flag_of_the_United_States.svg.png

Earth: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/330px-The_Earth_seen_from_Apollo_17.jpg

---