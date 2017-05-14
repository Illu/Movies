// Get JSON data from an url(path), success and error callback functions.
export function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


// The API is weird sometimes, this function gets the title of the movie
export function getTitle(data)
{
  var name;
  name = data.original_title;
  if (!name)
    name = data.name;
  if (!name)
    name = data.original_name;
  return name;
}
