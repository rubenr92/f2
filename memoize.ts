function memoize(callback:any){
    let cache:{[key:string]:any}
    cache = {}
    return (...args:number[])=>{
        const key = args.toString()
        if (cache[key] == undefined){
            let result = callback(...args)
            cache[key] = result
            return result
        } else{
            console.log('t')
            return cache[key]
        }
    }
}
const memoized = memoize((p1:number, p2:number)=>{return p1*p2})

console.log(memoized(2,3))
console.log(memoized(4,5))
console.log(memoized(2,3))