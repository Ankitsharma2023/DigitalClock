
        const colors = ["#2E94E3", "#E94E77", "#6B5B95", "#FF6F61", "#88B04B", "#92A8D1", "#F7CAC9", "#955251", "#B565A7", "#009B77"];

        function updateClock() {
            let now = new Date();
            let dname = now.getDay(),
                mo = now.getMonth(),
                dnum = now.getDate(),
                yr = now.getFullYear(),
                hou = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds(),
                pe = "AM";

            if (hou == 0) {
                hou = 12;
            }
            if (hou > 12) {
                hou = hou - 12;
                pe = "PM";
            }

            Number.prototype.pad = function (digits) {
                for (var n = this.toString(); n.length < digits; n = 0 + n);
                return n;
            }

            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
            let values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

            for (var i = 0; i < ids.length; i++)
                document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }

        function changeClockStyle() {
            const datetimeElement = document.querySelector('.datetime');
            const color = colors[new Date().getMinutes() % colors.length];
            datetimeElement.style.borderColor = color;
            datetimeElement.style.boxShadow = `0 0 30px ${color}`;
            const periodElement = document.querySelector('#period');
            periodElement.style.backgroundColor = color;
        }

        function initClock() {
            updateClock();
            changeClockStyle();
            setInterval(updateClock, 1000); 
            setInterval(changeClockStyle, 60000); 
        }
   