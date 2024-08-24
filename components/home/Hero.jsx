

function Hero() {
    return (
        <div className="flex justify-between">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold">Welcome to our store</h1>
                <p className="text-lg mt-4">We have the best products in the market. Check out our collection</p>
                <button className="bg-black text-white px-4 py-2 mt-4">Shop Now</button>

            </div>

            <div className="w-1/2">
                <img src="https://images.unsplash.com/photo-1542282081-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="hero" className="w-full h-full object-cover" />

            </div>
        </div>
    )
}

export default Hero