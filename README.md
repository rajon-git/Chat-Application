
<!-- PROJECT LOGO -->
# Project Plan - Chat Application with RTK Query

## Requirement Analysis

1. user can register. after registering, user will be automatically logged in, we will store login info to localStorage (for login persistance) and redirected to inbox page

2. user can login and after login we will save the login information in localStorage (for login persistance) and redirect user to inbox

3. load sidebar messages from conversation API and implement load more feature

4. load specific conversation messages when user clicks on it and implement load more feature

5. when user sends message,
   a) if conversation id is present, update conversation table and also inserts into messages table
   b) if conversation id is missing, get conversation id using filter
   _ if conversation id exists, then update that conversation and add to messages table
   _ if conversation id is missing, insert that conversation and add to messages table

6. sidebar conversation list scroll - sort by latest first and when user loads more, bring previous "10 conversations sorted by latest first" and pushed into the conversations array

7. messages list scroll - bring "10 latest messages per request sorted by oldest first". when user loads more, "bring previous 10 messages sorted again by oldest first" and unshift into the array

## Required APIs

1. register
2. login
3. get list of users other than requesting user
4. update conversation
5. insert conversation
6. find conversation
7. list conversation
8. list messages by conversation id
9. send message (insert messages into messages table)


<!-- TABLE OF CONTENTS -->

## ![tableOfContent][tableofcontent-shield] Table of Contents

| HTML TEMPLATE                            | SERVER TEMPLATE                              | CODE RUN                   | CONTACT                    |
| ---------------------------------------- | -------------------------------------------- | -------------------------- | -------------------------- |
| [Get HTML template](#-get-html-template) | [Get SERVER template](#-get-server-template) | [How to run](#-how-to-run) | [Contact us](#-contact-us) |

<br>
<!-- GET HTML TEMPLATE -->

## ![htmlIcon][htmlicon-shield] Get HTML Template

You can find the raw HTML template of the Chat Application with RTK Query from the "html_template" folder.

<!-- GET SERVER TEMPLATE -->

## ![serverIcon][servericon-shield] Get SERVER Template

You can find the raw SERVER template of the Chat Application with RTK Query from the "server" folder.

<!-- HOW TO RUN -->





<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://www.facebook.com/zhsust.rajon/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/md-rajon-ahamad-23938825b/
[thumbnail-shield]: https://i.ibb.co/d6hxnvd/Screenshot-50.png
[mail-shield]: https://img.shields.io/badge/%F0%9F%93%A7%20Email-support%40learnwithsumit.com-lightgray
[mail-url]: mailto:rajon.zhsust15@lgmail.com
[tableofcontent-shield]: https://img.icons8.com/external-flatart-icons-flat-flatarticons/28/undefined/external-direction-business-and-teamwork-flatart-icons-flat-flatarticons.png
[htmlicon-shield]: https://img.icons8.com/external-flaticons-flat-flat-icons/28/undefined/external-html-computer-programming-flaticons-flat-flat-icons.png
[servericon-shield]: https://img.icons8.com/external-itim2101-flat-itim2101/28/undefined/external-server-network-technology-itim2101-flat-itim2101-2.png
[rocketicon-shield]: https://img.icons8.com/arcade/30/undefined/experimental-rocket-arcade.png
[contacticon-shield]: https://img.icons8.com/external-flaticons-lineal-color-flat-icons/28/undefined/external-support-communication-media-flaticons-lineal-color-flat-icons.png
