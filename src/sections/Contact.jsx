
function Contact() {
    return (
        <section>
            <div className="container mx-auto px-4 flex flex-col gap-12">
                <h1 className="text-2xl font-bold text-center">اتصل بنا   </h1>
                <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                    <div className="flex flex-col gap-8 flex-1">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl">رقم الهاتف</h3>
                            <p className="text-secondary dark:text-darksecondary">0671727422</p>
                            <p className="text-secondary dark:text-darksecondary">032.11.59.99</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl">البريد الالكتروني </h3>
                            <p className="text-secondary dark:text-darksecondary">soufacdemy@gmail.com</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl">الموقع الجغرافي</h3>
                            <p className="text-secondary dark:text-darksecondary">الجزائر الوادي EL-Rimmal City 39000</p>


                        </div>
                    </div>
                    <div className="flex flex-1">
                       
                        <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.554402156002!2d6.850130475540568!3d33.35658937342687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12591141688195a7%3A0x508091e56c98c697!2zU291ZiBBY2FkZW15INin2YPYp9iv2YrZhdmK2Kkg2LPZiNmB!5e0!3m2!1sen!2sdz!4v1723918033751!5m2!1sen!2sdz"
                          className="w-full h-96 rouned-lg"
                         
                           allowfullscreen 
                           loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact