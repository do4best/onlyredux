import {useEffect} from "react";

let instance;
let counter=0
class Counter{
    constructor() {
        if(instance){
            throw new Error(
                alert("You can ceate a instance")
            )
        }
        instance = this

    }
    getInstance(){
        return this
    }
    getCount(){
        return counter;
    }
    increment(){
        return ++counter
    }
    decrement(){
        return --counter;
    }

}
new Counter()
export default function MainTwitter    ({count1}) {






    return (
        <>
        <div>Twitter</div>
            <h1>{count1}</h1>



        </>
    );
}

export {Counter};