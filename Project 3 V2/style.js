const imageArray = [
	"https://78.media.tumblr.com/0ffc5fa5e551a09dfd279153b77c43e5/tumblr_nr310wxmIC1ro8ysbo2_1280.png",
	"https://64.media.tumblr.com/f59495bc11ee5a67eef306a2e4640182/tumblr_ovh40cjt881wrd3fdo1_1280.jpg",
	"https://i.pinimg.com/564x/1d/5a/aa/1d5aaa279cb891c3a34adddf64959a6b.jpg",
	"https://i.pinimg.com/564x/28/c8/7e/28c87e129b0aaf62684e8e7ba2951248.jpg",
	"https://i.pinimg.com/564x/b3/07/49/b3074986ea15617fb501129a8d38d5a3.jpg",
	"https://64.media.tumblr.com/f04abe9d6e914adae351957d440eaa6d/tumblr_pq398vf1qh1w0yn3no2_r1_1280.png",
	"https://media.gamestop.com/i/gamestop/11096404/Garfield-Kart-Furious-Racing---PlayStation-4?$pdp$",
	"https://i.pinimg.com/564x/4c/86/64/4c8664d10cd493f3eff38b9da8abc666.jpg",
	"https://pictures.depop.com/b0/7438315/565013554_RzKIT7CED1/P1.jpg",
	"https://i.pinimg.com/474x/04/b8/25/04b825e524c8c54c044bd411ad5ccf25--garfield-ears.jpg",
	"https://pbs.twimg.com/media/Ec3SOx0UEAEDVJP?format=jpg&name=large",
	"https://i.pinimg.com/474x/c3/cf/8b/c3cf8bab38095e8aebff9cf825fc336f--funny-toys-s-party.jpg",
	"https://i.pinimg.com/originals/77/45/b9/7745b9900d2596c565674467ad98aad4.jpg",
	"https://www.autocar.co.uk/sites/autocar.co.uk/files/slideshow_image/29-garfield-stuck-on-you_chicagohistory.jpg_1_0_0.jpg",
	"https://i.pinimg.com/originals/16/31/52/1631529bcbf5addc62430a84e49cfc7e.png",
	"https://i.pinimg.com/564x/0d/41/6c/0d416ca0b5449cab6891656e56c1264c.jpg",
	"https://i.pinimg.com/564x/95/91/79/95917911f9401a572a0b742bcddb067f.jpg",
	"https://i.pinimg.com/564x/97/b9/d0/97b9d0caa9da08ae2efd28dfe51fa295.jpg",
	"https://d2h1pu99sxkfvn.cloudfront.net/b0/1548255/480046988_1udoQVHZ9q/P0.jpg",
	"https://ae01.alicdn.com/kf/HTB1DMe9HFXXXXawXpXXq6xXFXXXD/222484766/HTB1DMe9HFXXXXawXpXXq6xXFXXXD.jpg",
	"https://www.ellonhk.com/upload/product/1082/photo/5881e34f34c07.jpg",
	"https://preview.redd.it/5ya4ucolxwe81.png?width=640&crop=smart&auto=webp&s=756673062ee20af1568cccdaf9a68a316c303fac",
	"https://m.media-amazon.com/images/I/71EFYK3LczL._AC_SL1450_.jpg",
	"https://pbs.twimg.com/media/FHTosmTWYAAhCkZ?format=jpg&name=large",
	"https://i.pinimg.com/originals/ee/c2/a0/eec2a00e1b854c093d7c131e7393ddc8.jpg",
	"https://m.media-amazon.com/images/I/81LVfY5KB-L._SL1280_.jpg",
	"https://pbs.twimg.com/media/DtDSwv1XgAEBbTX.jpg",
	"https://i.ebayimg.com/images/g/bpUAAOSwRMhc9nY2/s-l400.jpg",
	"https://i.etsystatic.com/9658049/r/il/eaea79/1766056088/il_570xN.1766056088_hcqm.jpg",
	"https://i.pinimg.com/736x/67/14/c1/6714c1ae51874d2dcecacd83a46f82d5--garfield-cat-slippers.jpg",
	"https://pictures.depop.com/b0/10929748/482411767_9jcp0RzmNF/P0.jpg",
	"https://pbs.twimg.com/media/ElD8tLCWkAEOr5N.jpg",
	"https://pbs.twimg.com/media/EkjjvldWMAkJtI5.jpg",
	"https://i.pinimg.com/236x/0b/94/17/0b941773e380a2d35c3205c3844f7cc7.jpg",
	"https://78.media.tumblr.com/68aa0050915f5886476a3751390ceb52/tumblr_pg8q549SMe1wm6iqpo1_1280.jpg",
	"https://www.sell2bbnovelties.com/mm5/beanies/coolcat_540x540.jpg",
	"https://img.5milesapp.com/image/upload/f_auto,t_i800/v1504563104/iktrdtr0e40ejapdwhcm.jpg",
	"https://i.etsystatic.com/6519686/r/il/c5f778/2985409896/il_fullxfull.2985409896_kwkl.jpg",
	"https://m.media-amazon.com/images/I/71g2kFQnSSL._AC_SL1193_.jpg",
	"https://media.karousell.com/media/photos/products/2020/12/25/garfield_aquarium_fish_tank_la_1608906455_0fcf946b_progressive.jpg",
	"https://i.pinimg.com/736x/8e/21/15/8e2115730c99409b41a352d9d9f07796.jpg",
	"https://i.redd.it/lwwu09r97cz51.jpg",
	"https://i.ebayimg.com/images/g/rc8AAOSwbFFe07pI/s-l400.jpg",
	"https://pbs.twimg.com/media/Ec7QH58WkAAcVb3?format=jpg&name=large",
	"https://i.pinimg.com/564x/7b/82/81/7b8281f0fb10524f113b68afa55ae7a1.jpg",
	"https://i.pinimg.com/564x/68/45/90/6845904276fa9c48223ec173083fff07.jpg",
	"https://i.ebayimg.com/images/g/zQQAAOSw7kFend8y/s-l400.jpg",
	"https://m.media-amazon.com/images/I/71NgpjDYy5L._AC_SX450_.jpg",
	"https://i.ebayimg.com/images/g/XxkAAOSwbf5hErB0/s-l500.jpg",
	"https://i.ebayimg.com/images/g/uJYAAOSwyB5dTgsy/s-l500.jpg",
	"https://images.bonanzastatic.com/afu/images/3336/8962/47/200_208_1467477997.jpg",
	"https://i.ebayimg.com/thumbs/images/g/Ad0AAOSwdQ5iGsOL/s-l200.jpg",
	"https://dc1240h7n7gpb.cloudfront.net/wp-content/uploads/marionettes-9.jpg",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}

if($(this).width() > $(this).height()) { 
	$(this).css('width',MaxPreviewDimension+'px');
	$(this).css('height','auto');
   } else {
	$(this).css('height',MaxPreviewDimension+'px');
	$(this).css('width','auto');
   }
   image.style.width = '50%'
   image.style.height = '50%'
   