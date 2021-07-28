import Iss from './propdata/propdata'
export default function tabel (){
    const datgam = [{urlgam : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-3079879/cosmos_cosmos-desk-fan-12-lda---hitam_full02.jpg',
                    nama :<center>KIPAS COSMOS</center>,
                    ktg : 'cosmos 12 LDA Desk Fan, Kipas Angin Fleksibel yang Aerodinamis '},

                 

                    {urlgam : 'https://images.samsung.com/is/image/samsung/id-full-hd-n5000-ua43n5001akpxd-frontblack-145041782?$720_576_PNG$',
                     nama :<center>SAMSUNG SMART TV </center>   ,
                    ktg : '43 Full HD N5000 Seris 5 (1,920x1,080), Wide Color Enhancer,Clean View'},

                    {urlgam : 'https://www.lg.com/id/images/mesin-cuci/md07515736/gallery/medium03.jpg',
                   nama :<center>MESIN CUCI LG</center> , 
                    ktg : 'Mesin Cuci LG 15kg dengan pengering 8kg, AI DD dan TurboWash,ThinQ dengan WiFi '},
                    
                    {urlgam : 'https://images.samsung.com/is/image/samsung/id-top-mount-freezer-rt29k503jb1-rt29k503jb1-se-rperspectiveblack-284812724?$720_576_PNG$',
                    nama :<center>KULKAS DUA PINTU</center> , 
                     ktg : 'Kulkas 2 Pintu ALL Around Cooling 300L Hitam|SAMSUNG ID'},

                     {urlgam : 'https://www.electrolux.co.id/remote.jpg.ashx?urlb64=aHR0cHM6Ly93d3cuZWxlY3Ryb2x1eC5pbS9wcm9kdWN0cy9YTUxMQVJHRVJJTUFHRS9FREkxMDA0X0lEXzcwMHg3MDAucG5n&hmac=TZy7mlNGuig&preset=facebookthumbnail',
                     nama :<center>SETRIKA PAKAIAN</center> , 
                      ktg : 'Setrika Kering EasyLine - EDI1004, Hemat Energi Dan Ramah Lingkungan Dan Tahan Lama'},

                      {urlgam : 'https://www.sinarmaju.co.id/image/cache/catalog/old_data/rice%20cooker/Yong%20Ma/SMC-7047/smc7047-silver-2_-550x550.jpg',
                      nama :<center>MAGIC COM 2 Liter</center> , 
                       ktg : 'Yong Ma Magic Com 2 Liter SMC-7047, Warna: Gold dan SilverKarakteristik : Body Stainless.'},

                       {urlgam : 'https://images.philips.com/is/image/PhilipsConsumer/ADD4969_70-IMS-id_ID?$jpglarge$&wid=1250',
                       nama :<center>DISPENSER PHILIPS</center> , 
                        ktg : 'Dengan sistem filtrasi Micro P-Clean, dispenser air minum dalam kemasan ini mengurangi hingga 99% plastik mikro untuk menjamin kebersihan air.'},

                        {urlgam : 'https://harga-jual.com/wp-content/uploads/2015/12/kompor-listrik-induksi.jpg',
                        nama :<center>KOMPOR LISTRIK PHILIPS</center> , 
                         ktg : 'Philips menghadirkan kompor listrik induksi dengan layar digital berdesain modern dan berkelas'},
                         
                         {urlgam : 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-3165934/bolde_bolde-super-blend-x8-blender_full08.jpg',
                         nama :'BELENDER BOLD' , 
                          ktg : 'blender yang dilengkapi 4 mata pisau stainless steal dengan 4 kecepatan + 1 button puls dan Ice Crush'},

                          {urlgam : 'https://www.selka.id/assets/images/product/polytron/ac-split/polytron_pac-5vxm.jpg',
                          nama :'POLYTRON AC' , 
                           ktg : 'AC Polytron Neuva Ice memberikan solusi dengan pendinginan yang ekstrim cepat. Hal ini dicapai melalui desain High Efficiency Cooling'},

                           {urlgam : 'https://www.lg.com/id/images/microwave/md06051616/gallery/M-01.jpg',
                           nama :'MICROWAVE LG' , 
                            ktg : 'NeoChef™ Microwave Solo inverter dengan pemanasan dan defrosting merata kapasitas 23 Liter - Hitam'},

                            {urlgam : 'https://id-test-11.slatic.net/p/88a7aa614dbeb160f081a5a94c4723b4.jpg_720x720q80.jpg_.webp',
                            nama :'SPEAKER BLUETOOTH JBL' , 
                             ktg : 'BL Xtreme Splashproof Bluetooth SpeakerJBL Xtreme Splashproof Bluetooth Speaker merupakan speaker yang mempunyai baterai bertahan hingga 10 jam'}]
    return(
      
<div className="container py-4">

  
  <div className="row">
  {datgam.map((card,index) =>
  <div className="col-2 -lg-4 py-4" >
    <Iss urlgam={card.urlgam} 
    nama={card.nama}
        ktg={card.ktg}/>
        </div>)
  }
  </div>
 
  </div>


    )
}
