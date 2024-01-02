/**Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) 
who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) 
which contains form fields so visitors can send emails or leave a comment on your website with ease. 
However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise 
it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through 
form fields which may contain malicious code 
(e.g. a redirection to a malicious website that steals personal information). */

//SOLUTION
function htmlSpecialChars(formData) {
    if (typeof formData !== 'string') {
      throw new Error('Input must be a string');
    }
  
    return formData.replace(/[<>"&]/g, function(match) {
      switch (match) {
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case '&':
          return '&amp;';
        default:
          return match;
      }
    });
  }