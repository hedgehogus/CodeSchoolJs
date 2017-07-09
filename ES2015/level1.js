///////////////
// USING LET //
///////////////

function loadProfiles(userName){
    if (userName.length > 3){
        let loadingMessage = "This might take a while...";
        _displaySpinner(loadingMessage);
    } else {
        let flashMessage = "loading Profiles";
        _displayFlash(flashMessage);
    }
}

// the let keyword defines new variables scoped to the nearest block, not function

