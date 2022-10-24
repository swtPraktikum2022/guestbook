function handleLikeButtonClick(index) {

    //little timeout is needed or the form wont be submitted
    setTimeout(function (){
        document.getElementById("likeButtonOf" + index).disabled = true; 
        document.getElementById("dislikeButtonOf" + index).disabled = true; 
    }, 10)
}