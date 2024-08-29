import React from 'react'

function Platforms() {


    const clients = [
        {
            name: "Microsoft",
            logo: "https://images.ctfassets.net/xz1dnu24egyd/2Ix8kvOZiPx3ZX9L3mb5Vy/99a2f84c5f82e86cf8c397f4f7ce6535/gitlab-logo-400.png",
        },

        {
            name: "Google Cloud Partner",
            logo: "https://logodix.com/logo/1153515.png",
        },
        {
            name: "New Relic",
            logo: "https://images.ctfassets.net/xz1dnu24egyd/2Ix8kvOZiPx3ZX9L3mb5Vy/99a2f84c5f82e86cf8c397f4f7ce6535/gitlab-logo-400.png",
        },
        {
            name: "GitHub",
            logo: "https://logodix.com/logo/1153515.png",
        },

        {
            name: "Grafana",
            logo: "https://images.ctfassets.net/xz1dnu24egyd/2Ix8kvOZiPx3ZX9L3mb5Vy/99a2f84c5f82e86cf8c397f4f7ce6535/gitlab-logo-400.png",
        },
        {
            name: "PagerDuty",
            logo: "https://logodix.com/logo/1153515.png",
        }
    ]

    return (
        <div
            id='platforms'
            className="bg-zinc-900 py-24" >
            <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-10">
                    <div className="text-center">
                        <h1 className='text-zinc-200 text-2xl font-semibold text-center pt-5'>Trusted by our 50+ partners</h1>

                        {/* <p className="text-gray-400 text-center py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p> */}
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {
                            clients.map((client) => {
                                return (
                                    <div className="flex flex-col lg:flex-row items-center justify-center">
                                        <picture>
                                            <img
                                                className=" w-36 hover:opacity-100 transition duration-150 opacity-30"
                                                src={client.logo}
                                                alt={client.name}
                                            />
                                        </picture>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Platforms