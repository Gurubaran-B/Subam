import React, {useState} from "react";

function Typewriter() {

    const words = ['code','art','mathematics'];
    const [display, setDisplay] = useState([]);

    function popper(arr) {
        while (arr.length)
        {
            arr.pop();
            console.log(`pop:${display}`);
        }
    };

    function pusher(element) {

        let holder = element.split('');
        holder.forEach((e) => console.log(e));
        console.log(display);
        holder = [];

        // setTimeout(popper(display), 1000);
    };

    words.forEach((word) => setTimeout(pusher(word)), 1000);


    return (
        <span>{display}</span>
    );
}

export default Typewriter;