import React from 'react'

function gallery() {
    return (
        <section className="flex flex-col items-center py-10">
            <h2 className="text-3xl font-bold text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 sm:gr id-cols-3">
                <img src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" alt="Gallery Image 1" className="rounded-lg shadow-lg" />
                <img src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ" alt="Gallery Image 2" className="rounded-lg shadow-lg" />
                <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" alt="Gallery Image 3" className="rounded-lg shadow-lg" />
                <img src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" alt="Gallery Image 4" className="rounded-lg shadow-lg" />
                <img src="https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o" alt="Gallery Image 5" className="rounded-lg shadow-lg" />
                <img src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" alt="Gallery Image 6" className="rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default gallery