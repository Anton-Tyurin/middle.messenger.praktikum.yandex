export const ErrorPageTemplate = `
    <main class="wrapper">
        <div class="flexCenterWrapper"> 
            <div class="errorBlock">
                <h1 class="errorCode">{{code}}</h1>
                <p class="errorMessage">{{errorMessage}}</p>
                {{{link}}}
            </div> 
        </div>
    </main>`;
