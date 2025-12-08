import styled from "styled-components";
export const Promise = styled.div`
.title{
    text-align:center;
    font-size:40px;
    margin-top:50px;
    color:black;
}

.para{
    text-align:center;
    font-size:20px;
    margin-top:20px;
    color:grey;
}

.title1,.title2,.title3,.title4,.title5,.title6{
    margin-top:10px;
    margin-bottom:10px;
    font-weight:bold;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: rgb(119, 119, 119);
}

.box{
    color:black;
    margin-left:60px;
    margin-right:60px;
    padding:10px;
    
}
.para1, .para2, .para3, .para4, .para5, .para6{
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);}
.box1{
    display:flex;
    justify-content:center;
    gap:20px;
    margin-top:50px;
    margin-bottom:50px;
}

.box2{
    display:flex;
    justify-content:center;
    gap:20px;
}
.box1-1,.box1-2,.box1-3,.box1-4,.box2-2,.box2-3{
    // border-radius:10px;
    // box-shadow:0 4px 8px rgba(0,0,0,0.1);   
    // padding:20px;
    // border-top :10px solid lightgrey;
        border-top: 4px solid;
    display: flex;
    max-width: 350px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    
}
.box1-1{
    border-color: rgb(68, 178, 179);
}
.box1-2{
    border-color: rgb(239, 175, 75);
}
.box1-3{
    border-color: rgb(0, 189, 235);
}
.box1-4{
    border-color: rgb(134, 74, 249);
}
.box2-2{
    border-color: rgb(252, 41, 71);
}
.box2-3{
    border-color: rgb(50, 199, 102);
}

.icon{
display:flex;
gap:15px;
}

`;