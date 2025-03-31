type Handle = () => Promise<string>
const fullname = 'Dư Thanh Được'
const person: any = { name: fullname }
const handle: Handle = () => Promise.resolve(fullname)
handle().then(console.log)
