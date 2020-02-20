interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];
    
    constructor(){
        const EL: HTMLInputElement = document.querySelector('#value');
        EL.addEventListener('input', () => {
            this.notify(EL.value)
        });
    }


    subscribe (observer: Observer){
        this.observers.push(observer)
    }

    unsubscribe (observer: Observer){
        const INDEX = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(INDEX, 1)
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private EL: HTMLLIElement;
    constructor(){
        this.EL = document.querySelector("#price")
    }
    update(data: any){
        this.EL.innerText = data;
    }
}

const VALUE =  new BitcoinPrice();
const DISPLAY = new PriceDisplay();

VALUE.subscribe(DISPLAY);
setTimeout(
    () => VALUE.unsubscribe(DISPLAY),
    5000
)