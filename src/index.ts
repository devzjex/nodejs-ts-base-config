type Handle = () => Promise<string>
const fullname = 'Dung Mai'
const person: any = { name: fullname }
const handle: Handle = () => Promise.resolve(fullname)
handle().then(console.log)
