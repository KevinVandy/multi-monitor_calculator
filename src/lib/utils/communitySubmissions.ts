const communitySubmissions: Record<string, string> = {
	"Kevin Vandy's Setup":
		'a0=21%3A9&d0=34&d1=32&d2=24&f=Kevin%20Vandy%27s%20Setup&h0=3440&h1=2560&i=mmce4bd1-10bf-463c-a2a8-149b9c63018c&k0=30&k2=-25&l0=true&m0=LG%20Ultrawide&m1=LG%20High%20FPS&m2=LG%20Veritical&n0=FreeSync&n1=FreeSync&n2=FreeSync&num=3&o2=p&p0=IPS&p1=VA&p2=TN&q1=-54&r1=144&r2=75&s0=QHD&s1=QHD&u0=true&v0=1440&v1=1440&w=6&x0=2.99&x1=-79.96&x2=-112.41&y0=3&y1=13.99&y2=14.05',
	'Dev Command Center':
		'a1=21%3A9&a2=21%3A9&b1=0.5&b2=0.5&d1=29&d2=29&f=Dev%20Command%20Center&g=2.5&h0=2560&h1=2560&h2=2560&h3=2560&i=mmc6cb1d-2cca-482f-8d9e-fc65f2566380&j1=-3&j2=3&k0=5&k3=-5&m0=Left%20Monitor&m1=Top%20ultrawide&m2=Bottom%20ultrawide&m3=Right%20monitor&num=4&o0=p&o3=p&s0=QHD&s3=QHD&v0=1440&v3=1440&x0=-20&x1=-22&x2=-461&x3=-464&y0=-14&y1=-4&y2=185&y3=-9',
	'Dev Command Center (Bigger)':
		'a0=21%3A9&a1=21%3A9&d0=34&d1=34&d2=32&d3=32&f=Dev%20Command%20Center%20%28Bigger%29&g=2.75&h0=3440&h1=3440&h2=2560&h3=2560&i=0ecc36fb-2b1a-42de-86d5-2a9502ac7dde&j1=3&k2=-10&k3=10&m0=MSI%20Optix%20MAG341CQ%2034%22&m1=MSI%20Optix%20MAG341CQ%2034%22&m2=BenQ%20PD3200Q%2032%22&m3=BenQ%20PD3200Q&num=4&o2=p&o3=p&q2=18&q3=18&r0=100&r1=100&s0=QHD&s1=QHD&s2=QHD&s3=QHD&v0=1440&v1=1440&v2=1440&v3=1440&w=6&x0=237.1&x1=-248.1&x2=-247.1&x3=-1236.6&y0=-22.1&y1=194&y2=-25.1&y3=-27.1&z=15',
	"Video Editor's Dream":
		'a0=32%3A9&d0=49&f=Video%20Editor%27s%20Dream&h0=5120&h1=3840&i=mmce7a69-8b8c-44d1-a4e8-6aca5a1bfd3a&k0=20&k1=-10&m0=Video%20Editing&m1=Preview&num=2&p1=IPS&q0=54&q1=-54&r0=120&s0=QHD&s1=4K&u0=true&v0=1440&v1=2160&w=6.5&x0=55&x1=-19&y0=16&y1=20',
	"Photo Editor's Sidekick":
		'a0=16%3A10&a1=16%3A10&a2=16%3A10&b2=0.25&d0=30&d1=24&d2=16&f=Photo%20Editor%27s%20Sidekick&g=2.75&h0=2560&h2=2560&i=e4a8c72b-72b9-4d54-8ff7-4f46d1c41f6b&j2=6&k0=10&m0=Left%2030%20Vertical&m1=Bottom%2016%3A10&m2=Macbook&num=3&o0=p&p0=IPS&p1=IPS&q0=18&s0=QHD%2B&s1=FHD%2B&s2=QHD%2B&v0=1600&v1=1200&v2=1600&w=4&x0=12&x1=11&x2=-286&y0=-4&y1=2&y2=242',
	'Ultimate Racing Sim':
		'a1=32%3A9&d1=49&f=Ultimate%20Racing%20Sim&g=2&h1=3840&i=mmc3a220-1842-4ed3-808b-340bc09b429c&k0=15&k2=-15&m0=Left%20Window&m1=Ultrawide&m2=Right%20Window&num=3&q0=36&q2=36&r0=144&r1=144&r2=144&u1=true&w=8.5&x0=19&x1=16&x2=13&y0=22&y1=21&y2=24',
	'Stock Trader':
		'd0=24&d1=24&d2=24&d3=24&d4=24&d5=24&f=Stock%20Trader&g=2.75&i=b9828158-f4a1-4e74-8765-023c652f5bbc&j0=-6&j1=-6&j2=-6&k0=5&k2=-5&k3=5&k5=-5&num=6&w=6&x0=-10&x1=-12&x2=-14&x3=-1060&x4=-1065&x5=-1068&y0=-24&y1=-23&y2=-24&y3=184&y4=181&y5=182',
	'Pretentious IT Guy':
		'd0=32&d1=32&d2=15&f=Pretentious%20IT%20Guy&g=3.5&h0=2560&h2=2560&i=8b4a2eb2-d07c-496b-af21-adb189b77a84&j2=12&k0=25&m0=Vert%201&m1=Vert%202&m2=Laptop&num=3&o0=p&o1=p&q0=54&s0=QHD&s2=QHD&v0=1440&v2=1440&x0=-57&x1=-47.3&x2=-44.2&y0=-0.8&y1=0.9&y2=329.7',
	'Poor College Student':
		'a0=5%3A4&d0=19&d1=15&f=Poor%20College%20Student&g=1.5&h0=1280&i=49c0646d-5ed3-4856-91da-c1fe41516fbd&j1=6&k0=15&m0=Ancient%20Monitor&m1=10%20Year%20Old%20Laptop&num=2&v0=1024&w=3.5&x0=34&x1=27&y0=4&y1=102&z=18',
	'6K Ultrawide':
		'b0=0.5&b1=0.5&b2=0.5&d0=24&d1=43&d2=24&f=6K%20Ultrawide%20-%20Black%20Sands&g=2.5&h1=3840&i=mmca72d6-f8ee-4a83-8238-981ddb491113&k0=10&k2=-10&m0=Left%20Side&m1=FV43U%20or%20XG43UQ&m2=Right%20Side&num=3&o0=p&o2=p&p0=VA&p1=VA&p2=VA&q0=18&q2=18&r0=144&r1=144&r2=144&s1=4K&v1=2160&w=6&x0=2&x1=3&x2=5&y0=-3&y1=-3&y2=-3&z=13',
	'4 Monitor Productivity Toys':
		'a2=21%3A9&c2=%23000000&d0=24&d1=24&d2=29&d3=32&f=4%20Monitor%20Productivity%20Toys&g=2.75&h2=2560&h3=2560&i=96e22e1b-4a99-4b0c-95a3-9f276f30dc33&j2=-9&k0=15&k1=-20&m0=HP%2024%20%282%29&m1=HP%2024%20%281%29&m2=LG%2029&m3=LG%2032&num=4&o0=p&o1=p&s3=QHD&v3=1440&x0=-4.2&x1=388.3&x2=-183.3&x3=-577&y0=65.2&y1=66.2&y2=-38&y3=133&z=14',
	'6 Monitor Engineering Workstation':
		'a0=16%3A10&a1=16%3A10&a2=32%3A9&a3=21%3A9&a4=16%3A10&a5=16%3A10&d0=30&d1=30&d2=49&d3=40&d4=30&d5=30&f=6%20Monitor%20Engineering%20Workstation&g=4.25&h0=2560&h1=2560&h2=5120&h3=5120&h4=2560&h5=2560&i=mmc5b36-a299-4f00-8a08-5a65806687db&j0=-9&j1=-6&j3=3&k0=10&k1=-10&k4=-35&k5=30&num=6&o4=p&o5=p&s0=QHD%2B&s1=QHD%2B&s2=QHD&s3=4K&s4=QHD%2B&s5=QHD%2B&v0=1600&v1=1600&v2=1440&v3=2160&v4=1600&v5=1600&w=7.5&x0=192&x1=174.5&x2=-622.4&x3=-1324.3&x4=-1223.9&x5=-2555.7&y0=-58&y1=-60.7&y2=216.6&y3=445.3&y4=125&y5=100.6',
	'Laptop With Friends':
		'd0=15&d1=21&d2=24&d3=21&f=Laptop%20With%20Friends&i=8f82c416-2583-4dc9-83e1-07e6f24ef813&j0=9&k1=5&k3=-5&m0=Laptop&num=4&o1=p&o3=p&w=4&x0=241&x1=-249&x2=-250&x3=-252&y0=204&y1=-12&y2=-10&y3=-12&z=17',
};

export default communitySubmissions;
