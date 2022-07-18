export const error_template = `
    <main class="wrapper">
        <div class="flexCenterWrapper"> 
            <div class="errorBlock">
                <h1 class="errorCode">{{code}}</h1>
                <p class="errorMessage">{{errorMessage}}</p>
                <a class="link" href={{linkPath}}>{{linkText}}</a>
            </div> 
        </div>
    </main>`