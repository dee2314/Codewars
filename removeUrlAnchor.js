/**
 * Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */

//SOLUTION
function removeUrlAnchor(url) {
    // Find the index of the '#' character in the URL
    const index = url.indexOf('#');
    
    // If '#' is found, extract the substring before it; otherwise, return the original URL
    return index !== -1 ? url.substring(0, index) : url;
  }