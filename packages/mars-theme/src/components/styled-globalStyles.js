import { css, styled } from "frontity";
 
/* Global Variables */
export const themeColor = {
    fontColor: "#000000",
    linkColor: "#000000",
    linkHoverColor: "#8c94d8,"
};

/* Global Styles and Typography */
export const globalStyles = css`
html {
    box-sizing: border-box;
    scroll-behavior: smooth;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body{
    margin: 0;
    font-family: 'proxima-nova', sans-serif; //default font
}

h1, h2, h3, h4, h5, h6{
    margin: 5px 0 10px;
}

h1{
    font-size: 2.4em;
}

h2{
    font-size: 2em;
}

h3{
    font-size: 1.8em;
}

h4{
    font-size: 1.6em;
}

h5{
    font-size: 1.4em;
}

h6{
    font-size: 1.2em;
}

p{
    font-size: 1em;
    margin: 0 0 10px;
    line-height: 1.5;
}

div{
    font-size: 1em;
    line-height: 1.5;
}

/* a{
    text-decoration: none;
    color: ${props => props.themeColor.linkColor};

    &:hover{
        color: ${props => props.themeColor.linkHoverColor};
    }
} */

a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

blockquote{
    margin: 5px 0 5px 30px;
}

pre, code{
    padding: 10px;
    margin: 10px 0;
    background: #f5f5f5;
    border: 1px solid #DDD;
    overflow: auto;
    font-size: 1em;
}

ul, ol{
    margin: 0 0 10px 10px;
    padding: 0 0 0 25px;
    font-size: 1em;
}

input{
    padding: 5px 7px;
    outline: 0;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 1em;
    font-family: inherit;
}

label{
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
}

textarea{
    width: 100%;
    border: 1px solid black;
    outline: 0;
    border-radius: 3px;
    padding: 10px; 
    box-sizing: border-box;
    font-family: inherit;
}

button, .submit{
    background: #e0e0e0;
    padding: 5px 7px;
    border: 1px solid #cecece;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    font-family: inherit;
}

img{
    max-width: 100%;
    height: auto;
     //disables saving img file from user
     pointer-events: none;
}

`
export const superScript = styled.div`
font-size: 0.5em;
vertical-align: super;
`

