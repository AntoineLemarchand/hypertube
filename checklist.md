# Mandatory part
## User Interface
[ ] The user can register with at least their:
    - username
    - last name
    - first name
    - password
[ ] The user can register AND login via Omniauth:
    - 42 strategy
    - one of your choice
[ ] The user can login with their username and password
[ ] The user must be able to receive an email allowing them to reset their password
[ ] The user must be able to logout wth one click from any pages on the website
[ ] The user can select a language with english as default
[ ] The user can modify their email address, profile picture and information
[ ] The user can check any other user, including profile picture and information (the email address must remain private)

## Library part
[ ] This section can only be accessed by authenticated users
### Search field
[ ] The search engin must query at least two external sources that exclusively provide video content and display the results in the form of thumbnails
### Thumbnails
[ ] The result of the search will be displayed as thumbnails, sorted by names
[ ] If no research was done, the result must be of the most popular video from the extaernal sources, sorted by criteria of you choice (downloads, peers, seeders, etc...)
[ ] Each thumbnail must display the name of the video, its production year (if available), its IMDb rating (if available), and a cover image.
[ ] Watched and unwatched videos should be differentiate in the thumbnails.
[ ] The list will be paginated, with the next page being loaded asynchronously as the user scrolls down. There should be no link to load the next page.
[ ] The page will be sortable and filterable according to criteria such as name, genre, IMDb grade, production year, etc.

## Video part
[ ] The video part present the details of a video, including a video player, if available
summary, casting (at least producer, director, main cast etc.), the production year, length, IMDb grade, a cover image and anything else relevant.
[ ] Users will have the option of leaving a comment on the video, and the list of prior comments will be shown
[ ] To launch the video on the server we must, if the file was not downloaded prior,
the associated torrent on the server will be launched, and the video stream will be initiated as soon as enough data has been downloaded to ensure a seamless watching experience. Any treatment must be done in the background in a nonblocking manner.
[ ] Once the movie is entirely downloaded, it will be saved on the server, to avoid the need to re-downloading in the future. However, if a movie is unwatched for a month, it will be erased.
[ ] If English subtitles are available for the video, they will be downloaded and made available for the video player. Additionally, if the language of the video does not match the preferred language of the user and subtitles are available,the subtitles will be downloaded and selectable.
[ ] If the video is not natively readable for the browser 1, it will be converted on the fly into an acceptable format. At minimum, mkv support is required. 

## API
[ ] The API is restful
[ ] The api uses an OAuth2 authentication
[ ] Authenticated users are allowed to retrieve or update any profiles.
[ ] Any user can access the website’s « front page », which displays basic inforationabout the top movies.
[ ] A GET request on a movie should return all the relevant information that hasbeen previously collected.
[ ] Authenticated users can access user comments via /comments/ :id and movie/ :id/comments. They can also post a comment using an appropriate payload.
[ ] Any other API call should not be usable. Return the appropriate HTTP code.
[ ] The API follow this documentation
    [ ] POST oauth/token Expects client + secret, returns an auth token
    [ ] GET /users returns a list of users with their id and their username
    [ ] GET /users/:id returns username, email address, profile picture URL
    [ ] PATCH /users/:id Expected data : username, email, password, profile picture URL
    [ ] GET /movies returns the list of movies available on the frontpage, with their id and their name
    [ ] GET /movies/:id return a movie’s name, id, imdB mark, production year, length, available subtitles, number of comments
    [ ] GET /comments returns a list of latest comments which includes comment’s author username, date, content, and id.
    [ ] GET /comments/:id returns comment, author’s username, comment id, date posted
    [ ] PATCH /comments/:id Expected data : comment, username
    [ ] DELETE /comments/:id
    [ ] POST /comments OR POST /movies/:movie_id/comments Expected data : comment, movie_id. Rest is filled by the server.

# Bonus part
[ ] additional Omniauth strategies
[ ] various video resolutions
[ ] Stream the video from the mediastream API
[ ] More API routes to add, delete movies, etc...
