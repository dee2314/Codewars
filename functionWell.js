/**
 * For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 
'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
 */

//SOLUTION
function well(x) {
    // Count the number of 'good' ideas
    const goodIdeasCount = x.filter(idea => idea === 'good').length;

    // Based on the count, return the appropriate message
    if (goodIdeasCount === 1 || goodIdeasCount === 2) {
        return 'Publish!';
    } else if (goodIdeasCount > 2) {
        return 'I smell a series!';
    } else {
        return 'Fail!';
    }
}