function receivesAFunction (callback){
 callback();
}

function returnsANamedFunction(){
    return function yeehaw() {
        console.log('saddle up, partner.')
    }
}

const returnsAnAnonymousFunction = () => {
   return () => console.log('asl;jfa;s')
}
