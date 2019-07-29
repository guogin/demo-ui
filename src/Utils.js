export function get(url) {
  // Return a new promise.
  // We do all the work within the constructor callback.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('get', url);

    req.onload = function () {
      // 'load' triggers for 404s etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

export function getJSON(url) {
  return get(url).then(JSON.parse);
}

export function getSync(url) {
  var req = new XMLHttpRequest();
  req.open('get', url, /*async=*/false);
  req.send();

  if (req.status === 200) {
    return req.response;
  }
  else {
    throw Error(req.statusText || "Request failed");
  }
}

export function getJSONSync(url) {
  return JSON.parse(getSync(url));
}

export function resetPageContent() {
  var storyDiv = document.getElementById('story');
  storyDiv.innerHTML = '';
}

export function addHtmlToPage(content) {
  var div = document.createElement('div');
  div.innerHTML = content;
  var storyDiv = document.getElementById('story');
  storyDiv.appendChild(div);
}

export function addTextToPage(content) {
  var p = document.createElement('p');
  p.textContent = content;
  var storyDiv = document.getElementById('story');
  storyDiv.appendChild(p);
}