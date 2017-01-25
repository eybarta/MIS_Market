export const items = [
	{
		id: 1389,
		catId: [1],
		image: "dist/img/items/item1.png",
		catNo: "AAA",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1384,
		catId: [2, 1],
		image: "dist/img/items/item2.png",
		catNo: "BBB",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1382,
		catId: [3],
		image: "dist/img/items/item3.png",
		catNo: "CCC",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1389,
		catId: [4],
		image: "dist/img/items/item4.png",
		catNo: "DDD",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 13845,
		catId: [5],
		image: "dist/img/items/item5.png",
		catNo: "EEE",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1385678,
		catId: [6],
		image: "dist/img/items/item6.png",
		catNo: "FFF",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 13878,
		catId: [1],
		image: "dist/img/items/item1.png",
		catNo: "AAA1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 13878904,
		catId: [2],
		image: "dist/img/items/item2.png",
		catNo: "BBB1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 135579,
		catId: [3],
		image: "dist/img/items/item3.png",
		catNo: "CCC1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1382349,
		catId: [4,2],
		image: "dist/img/items/item4.png",
		catNo: "DDD1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1345689,
		catId: [5,2],
		image: "dist/img/items/item5.png",
		catNo: "EEE1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1387682,
		catId: [6,2],
		image: "dist/img/items/item4.png",
		catNo: "FFF1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 1388909,
		catId: [11],
		image: "dist/img/items/item5.png",
		catNo: "EEE1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 138772,
		catId: [37],
		image: "dist/img/items/item4.png",
		catNo: "FFF1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 138889,
		catId: [84],
		image: "dist/img/items/item5.png",
		catNo: "EEE1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	},
	{
		id: 138982,
		catId: [4],
		image: "dist/img/items/item4.png",
		catNo: "FFF1212",
		name: "Asian Girl Poster (Canvas/Foam)"
	}
]


const catIds = [1,2,3,4,5,6,11,37,38,84,33,65,81,79,9];
export const itemGenerator = (amount) => {
	let items = [];
	for (var i =0; i<amount; i++) {
		let upTo3 = Math.ceil(Math.random()*3),
			upTo5 = Math.ceil(Math.random()*5),
			price = (Math.random()*2000).toFixed(2),
			cats = [];

		for (var j=0; j<upTo3;j++) {
			cats.push(_.sample(catIds));
		}
		items.push( {
			id: ++i,
			catId: _.uniq(cats),
			image: "./dist/img/items/item"+upTo5+".png",			
			catNo: "FFF1212"+ i,
			name: "Asian Girl Poster (Canvas/Foam)" + i,
			attachments: [
				{
					type:"pdf",
					label: "PDF File",
					link: "http://mis-implants.com/upload/PDF/Catalog_SEVEN_Italy.pdf"
				}
			],
			price,
		})
	}
	return items
}
