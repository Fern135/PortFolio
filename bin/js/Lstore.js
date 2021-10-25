
class LStore {
    constructor(title, data) {
        this.title = title;
        this.data = data;
    }

    setXPDay(expires) {
        this.expires = expires;
    }

    setTitle(title) {
        this.title = title;
    }

    setData(data) {
        this.data = data;
    }

    // local storage
    setLSTR() {
        localStorage.setItem(this.title, this.data);
    }

    // getting the local storage
    getLSTR() {
        return localStorage.getItem(this.title);
    }


    // set the cookie
    setCookie() {
        const d = new Date();
        d.setTime(d.getTime() + (this.expires * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = this.title + "=" + this.data + ";" + expires + ";path=/";
    }

    // get the cookie name
    getCookie() {
        let name = this.title + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // check if cookie exists
    // may not even use in the first place
    checkCookie() {
        let user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }

}


