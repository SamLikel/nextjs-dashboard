export default function Page() {
    const timer = () => new Promise(resolve => setTimeout(() => resolve(true), 1000));
    return (
        <><div>Welcome to Customers</div></>
    )
}