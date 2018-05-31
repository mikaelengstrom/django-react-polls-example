function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

export function post(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        method: 'POST',
        redirect: 'follow',
    });
}

export default {
    post
}
