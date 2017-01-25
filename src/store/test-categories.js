export const categories = [
		{
			id: 1,
			src: "./dist/img/categories/new.png",
			name: "New!"
		},
		{
			id:2,
			src: "./dist/img/categories/simple.png",
			name: "Simple Campaign"
		},
		{
			id:3,
			src: "./dist/img/categories/print.png",
			name: "Printed Materials",
			children: [
				{
					id: 5,
              		name: "Catalogs",
					children: [
						{
							id: 11,
                    		name: "Product Catalog"
						},
						{
							 id: 37,
                    		name: "Mini-Catalogs"
						}
					]
				},
				{
              		id: 38,
              		name: "Stationary"
            	},
				{
					id: 84,
					name: "User Guide"
				},
				{
					id: 33,
					name: "Posters"
				},
				{
					id: 65,
					name: "Leaflets"
				},
				{
					id: 81,
					name: "Flyers"
				},
				{
				id: 79,
				name: "Exhibitions"
				},
			]
		},
		{
			id:4,
			src: "./dist/img/categories/scientific.png",
			name: "Scientific Research"
		},
		{
			id:9,
			src: "./dist/img/categories/accessories.png",
			name: "Accessories"
		},
		{
			id:6,
			src: "./dist/img/categories/courses.png",
			name: "Courses"
		},
	]