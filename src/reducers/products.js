var initialState = [
	{
		id : 1,
		name : 'Iphone 7 Plus',
		image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAPDxAQDw8PEA8PEA8NEBAPDxANFREWFhURFRYYHzQgGBolGxUVITEiMSkrLi4uFx8zODguOCguMCsBCgoKDg0OGxAQGi0dHR8rNS0tLS0rLS8rLS0tLy0tLSstLS0tLS0uLS0wLS0tLS0tKy0tKy0tLS0tLS0tLS0tLf/AABEIALoBDwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAEwQAAEDAgAFDAwNBAIDAAAAAAEAAgMEEQUSITFBExQyMzRRcXSBk7PSBhUiUlRhcnORsrTCByRCU2NkkpShpMHT4SNisfBE0UOCov/EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBgUH/8QAMREBAAEDAgUDAwMDBQEAAAAAAAECAzEREgQhQVFhBRMyIoHwcZGxQqHhFSMkUtEU/9oADAMBAAIRAxEAPwD7igICAgwmlaxpc4hrWglxOQADSoFa7CEzxjMYyKM7F1QTjOG+GDMOE38Srulfaw13N89T81J11Xf5g2+JBVT/AD9PzT+um7zCdviTXM/z1PzT+um7zBt8Sa5n+fp+af103eYRt8Sa5n+fp+Zf103eYNviTXNR89T8y/rpu8wbfEpFTP8APQc0/rpu8wbfEs2zzfOw827rJu8wbfEtramUZSGSDTqd2u5ATl9IUxVP6m37OuCZsjQ5puDyEHSCNBV4nVSeTYpBBxvqXOJbEAQ02dI++KHaQANkRpzBV17JiO7Jol0vbyR2/VTpJrCbSd+Psfymk9zWC0nfj7H8ppPc1gtJ34+x/KaT3NYQC/NqjbjOMTN+KaT3NYTaTvx9j+U0nuawWk78fY/lNJ7msFpO/H2P5TSe5rDFwm0PZwOjP6OUaScmUFTc4j24kgF7Xu1zd9p0/wCUiSY0dKsgQEBAQEBAQEFZhTu5KeE7FznyvGgtjAIB8WM5p5FSpanq+f8AwndmdRQGnipgzV6kPkdLK3VBHG1waGMaclyTnN7WzZclKI3zzXqnbGkPnsvwnYYaSNcR5Pq1P1VpNumFN8po/hWwnG5stQYp4MfFewQxxvtkuWubaxsdNwoqsxMckxcmJfb4axpLGm4e9kkg7h2LisLQ4l1rA90Ml7nLbMVy6OjVuY4nOLct1BE6skSICkSEG1htlSJmJ1hExEt9M7Fmc0ZpYxLbRjtOK48oLfQuqnLnqwsFdRorZC2N5bsg04vlHIPxUThMZIYwxrWjM0ABKcImebJSqIK2PCchrH0utZmxsgbMKw21u95dbUhpxhn5DmyXJMJ4UkheGsoqqpBbjF9NrbFBuRinVJGm+nNbKiVZDhRzJJJmYGrmyzamJZGigD5AwEMxjq+WwJA4UF1g2sfMwufTzUxDi3EqNSxyLA4w1N7hbLbPfIUQ60QICJaK7I0P0xua4cF7OH2SVWrutTzdisgQEBAQEBAQEFRhWZzZ4ADYPjnByaAWFZXaphpbpiXmey/sVgwnGxstw+O+pyMOK9l7XANiLGwuCDmCwpqmnDaqmKsvFu+B6I555udi/aWnvVKe1DowX8ElNFKyR73yBjg4NlkD2YwNwS1rG34Cbb4KTeq00ItRrq+lxMDWhozAenxrFqkADMLcCAgi6BdBIKDMFBvgedXjGgQSEfbjXRaqmeTC5TGmqzWzJzYQNozws9cKKp0hMZa6rCEERDZZY43EXAe9rSW5rgHQpVaO3dJ4TDzjUNDt3SeEw841DQ7d0nhMPONRJ27pPCYecagdu6TwmHnGoHbuk8Jh5xqB27pPCYecaiNDt3SeEw841DQ7d0nhMPONQ0Zy1UckMj4ntkaARjMcHDGGjIq1TpC0ZWKsgQEBAQEBAQEFJhjdNN5FR7iwvdG1pgFg2SgICAghBCAgkIM2oM4t1Q5P/BNY2zHGj9C1tfJjc+K4XSxcmFNqPCz1wq14Wpy4xu5/E4umkVlVjcoFygXKBcoFygXKBcoFygXKCudsa3zo9nhVasJpyt1ZAgICAgICAgIKPDDvjVMPo5z4vkLC90bWmIWDZKAgICCEEIIugkINjUGyF1qmLPlglH/1GcvoWtr5MrnxW66WDlwmf6R05WZvLCrXhanLi/5z+JxdPIrKrFFRAQEBAQEBARKufsa3T/UGQZydbw5FWvC0ZW6sgQEBAQEBAQEFFhfddN5qf/LFz3sw2tMVi2LoJQEGbIyRcBSjVsfESBZtrZ8ouSp6IiebmuqrIQSEGwINkO6YvMy+sxa2vkyr+K4XSwc2EdrPC31gq14Wpy4Ru5/E4unkVlViiogICAgICAgIlXjNV+eb7PAq14WpytlZAgICAgICAgIKHDTRrqmNspjnF9Nu4yLC90bWmAKwbJugXQLoO2J2QcAUollMCWkDPZSr1V11VdCDJpQbGoM4h8ahNgbQzWJzt7pmUf4Wtr5MrmF0ulg48KtvEcgPdRnL4ng34cirXhanLk/5z+JxdPIrKrFFRAQEBAQEBARKtkALK0HKDIAQcxGtoVWrC1OVwrIEBAQEBAQEBBRYc3TTeRUe4sL3RtaaQVg2TdBGMgYyDZHPi5M6DN1WbWtY76lGjmuoSXQSCg2sQbYHDXUI34JrcjmLW18mdz4rpdLncmFHWiN99g5S8AKteFqcuIbufxOLp5FZVZIqIlhLK1gLnuDWjOXEAekqJqiMymmmauURq4u3VN863hs63ptZYzxNqP6m3/y3v+rohroX7CRjjvBwv6FNPEWqvjVClVi5TmmXQtmegiBARKudsa3zg9mhVa8LRlbqyBAQEBAQEBAQUOHT8YpvIqPcWF7o2tNAKwbF0EXQMZBF0EXQRdBN0GTSg2sKDppN0M4vL0ka2tZZXcLhdDBy4S2p3Cz1wq1YTTlwjdz+JxdNIrIWSKq/CmEhC6KJgD6iocWxRk5MVou+V28xoyk6SQM5VK69scst7Vqa9ZnlEZ/8+6lwh2RQt7mP4xI24MlhiB3icQfwFvGvj8R6hRROkfVP9n0rHAXKo1n6Yn91FUYZnk2eI5veOYC229kXz6vU7tXLSNO2jvo4G1RjXXu5iKR2UxzU79+neJIyd/FeQR6VSbnD3MxNM+OcNdt+nlFUVR55T+7rpOyGWmIDJjURd5MxzSB4je4/Fa2eNrsTpTVup7SzucBbvx9VOyfD2eBcNQ1bbsNnjZRu2Q8fjC+9wvG2+Ijlyns+FxXB3OHn6sd1kutyCCufsazzo9mhVa8LU5W6sgQEBAQEBAQEFBh7dFN5FR7iwvdG1py3WDZN0EXQQSgglAxkEXQLoM2lBtYUHXR7pZxeXpI1tZyyu4XK6GDlwltTuFnrhVqwmnLhG7n8Th6aRWQsHOABJNgASScwAykoiHyLB2HXV81XXX7iVxpoP7KGM3DBvY57p3IF8D1bippj26cz/H+XoeB4eIoiZ/X7ugWL+5zHPvL4WKeb6UY5ughZ6qtMrFeKl4lyvC0heE0lW+CRssZLS03ybyvTXVRVFVM6TC1dqm7RNFXPV9TwXXNqImyt+UO6HevGcf7osvXcLfpv24rjq8ZxFmbNyaJ6OtdDFWv2NZ50ezQqleFoyuFdAgICAgICAgIKDD+6KbyKj3Fhe6NrTjusGxdBF0EXQQSgi6BjIJBQZNKDcwoOyj3Szi8vSRrazlldwul0MHLhLancLPXCrVhNOXCN3P4nD00ishTfCnhA02B66RpIc6IQAjONWe2Mn0OKSmmOb5t2AQY2DorZ3OlPDaQi3oC8f6pXpxc69Ih6fhatLUPRsFlwVS6Gd1UYuClOrklYtqZaRLnc1X1XpnSXquxLCOoljXH+nIRE6/yZM0buXI3lG8u30vips3/bn41fy+T6pw3uRNUZjn9ur3K9U84rX7Gs86PZoVWvC1OVwrIEBAQEBAQEBB5/sg3RTeRUe4sL3RtacV1g2QSgglBF0EEoIugXQSCgyaUG9hQd1DuhnF5ekjW1nLK7hdLoYOXCW1O4WeuFWvCacuEbufxOLp5FZCv+EHA2v8G1NMDZz2tczxyMcHtHAS0BYcRcm3b3R0/jq1sRE1xEvnnwcRkUEYIIMcs8bgRlDsfG95eN9Xq/5OsdYh6CiNlOxcVAxXW38o/Vc1E7qf0dNHOGKlYsg0zNV4laJaoWNLi12QOBAPev+SeC+Q+IrSZ5LVTVEa09ER4zop42mz3RPMZ3pWglv4/4SJiK6au0p4jlEVPqWDagywxSm15Io3mxuLloJsvb26t1ES8bdp21zHlzP2NZ50ezQqa8KxlcKyBAQEBAQEBAQef7Id0U3kVHuLC90bWnACsGyLoIugglBF0EEoIugkFBm0oNzCgsKDdDOLy9JGtrOWV3C7XQwcuEtqdws9cKtWE05cI3c/icXTyKyHVhAkRSEAktY5wAzktFwB6FjxFM1WqojOi9nT3I1xq8L2MxMdTY7LYsz3S3GYl1sv4BfnnFzV7m2f6Y0el4udLvLsnCFNccGUFRZuaSm1XCtjfoOQjOuuaeromOzcCqoapVNK1LkkW0NqYGS6n3ekZhpJOQDlvZIpmudIXrpiaeb6ngum1KCGI544o2Hha0A/ivbWqdlEU9oeIvV77lVXeZc8mxrPOj2aFWrwpGVwrIEBAQEBAQEBB57si2+m8io9xYXuja0r7rBsi6CCUEXQYkoCCEEgoMwUG5hQWOD90M4tJ0ka2s5ZXcLxdDBy4S2p3Cz1wq1YTTlwjdz+JxdPIrIWSIfOK+OTBE7w8E4LqJC+GYC4o5XnLDJvRk7F2i9l5v1f0r3P8AdtRz6+f8vs8Nf96mIn5R/db4zXi4IIIyEZQRvheUmmYnTDp+KtrsGXOMw2d+BXTavacqsOi3f6S4xTzZi3l0Lo+lvvoJqNrGl80wYBnJIa0cpVqZmqdKI1Um/EdFBhDDdKynnqIHOqBTPZHKGA3BebNIJsCL5MhX0bPpt+vSatKdVf8AUbdE8+enZ0fBvT1GFallVLCYaGmcJW4+eoqBtYH9rT3R8YavscJ6fRZq1mdZcHG+qzdt7aI2xP7y+yr6b4Stk2Fb50ezQqteFoyuFZAgICAgICAgIPPdke303kVHuLC90bWlasGyLoMSUEEoIJQLoIugkFBk0oN7CgssG7oZxaTpI1tZyyu4Xq6GDlwltTuFnrhVqwmnLhbu5/E4unkVkLJFWL2BwLXAOaQQQ4Agg5wRpSUxOnNVx9j9MzaoxGO8aXCMcDQe55Fw3fTuHuTrVTDqjjL2mkzqq8I0lUxzyyiE0Y2Gtqxmqkf3Rzta0cjyuK56JYq+OtP55bU8ZVHn7PI4Zw1hCK4jwPX5jZz4xI0G2TaS6/pC5o9D0nnVydNHG0TE6xzeVwbgnCWEqqLtjDWx07bvIjpZmgvzhou3uRovosu2rh/YtTHD0/VKvuzVMVVTEaeX0Oj7BY5SGPpo6ajAN4CcaWZxzl+KSMwGUklRwXB8RE779Ws9uy13jbdFuaKZ3TOeXJ7qlpmRMbHG1rGNADWtFgANAC+w+PNUzltRCtk2FZ50ezQqteFoyuFZAgICAgICAgIPPdke303kT+4sL3RtaVl1g2YkoIJQYkoIugXQRdBIKDIINzCgtMGboZxaTpI1tZyyu4Xy6GDlwntTuFnrBVqwmnLhG7n8Th6aRWQskVEBARIgIgRIiBEq2TY1nnW+zQqteFoyuFZAgICAgICAgIPPdkm303kT+4sL3RtaVV1g2YkoIJQQSgxJQRdAugkFBk0oNzCgtcF7oZxaTpI1tZyyu4X66GDlwltTuFvrBVrwmnLhG7n8Ti6eRWQskVEBAQEBAQEBEq2TY1nnW+zwqleFoyuFdAgICAgICAgIPO9ku3U3kT+4sL3RtaVN1g2YkoIugi6DQce+cWuch3rIBc/eH+8qDYgkFBkCg3MKC2wSfjDOLSdJGtrOWV74vQLoYObCO1u4W+sFWvCacuBu7n8Th6eRWQskVEBAQEBAQEBEq1+xrPOt9mhVK8LU5XCugQEBAQEBAQEHneyXbqbyJ/cWF7o2tKe6wbIJQYlBryoIN0Duv9sgjuv9t/0gzBQZNKDawoLfA+6GcWk6SNbWcsruHol0MHNhHa3cLfWCrXhNOXA3dz+Jw9NIrIWSKiAgICAgICAiVc7Y1nnW+zQqleFqcrdXQICAgICAgICDz3ZLt1P5E/uLC90bWlLdYNmJKCCUGJKCCUEXQLoF0GQKDawoLjAx+MN4tJ0ka2s5ZXvi9Guhg5sIbW7hb6wVa8Jpy4G7ufxOLppFZCyRUQEBAQEBAQESrnbGr8632eFVrwtTlbqyBAQEBAQEBAQee7JQdVgO8yb3Fhe6NbUqMlYN2JKDElBBKCCgi6CEBBkCg2tKC5wFlqG8Xk6Ri2s5ZXcaPSroYObCG1u/9fWCrXhNOXLUUQdJqrZJI36m2MmMsysBLgCHtOkn0qyqNaP8Jn/L/toamtH+Ez/l/wBtDU1o/wAJn/L/ALaGrCaIxtc99XMxjAXOe80zWtaM5JMeRDVyxVIdb+vWsDiA18sDImEnNldDk5bXUaraO3Wj/Caj8v8AtqVdTWj/AAmf8v8AtoamtH+Ez/l/20NTWj/CZ/y/7aGqJIMSKXunPLzjuc/Fxi7FDfkgDM1ozaFWvC1OVqrIEBAQEBAQEBBW4TcRJCPkSCWM+UQHN9VypOVoeTe0gkHOCQeEZFy45OlgSoSxKCCUEXQQSgi6ACgyBQbGFSPT4KDhMGaI6duMPpHuyfgwrqp7OaruuldRorr6m+2cC+TxZf0UVYTGWFwQCMoIFlMKyIgQEHPV0zZNTx9jHK2XFyYrnNBxcbgcWuHjaFEytDocLggi4IsQcxB0FJwiENFgBvCyRglKlAgINVUe4tpc5rRym36qtUrU5d6sCAgICAgICAg566lEzCwktOQtc3ZMeMocPGFExrCYnR5+sp3X+MU8pdm1ejAeyQaC5myaeQ8Kyqpicw0irs5NbQb1Z92k6qpsjz+y2+fBrSD6392k6qnZH5Bvnwg0cP1v7tJ1U2R+QnfPgFDCfC/uz+qmyDfPgNBCM+u/uz+qntwb58I1lB9b+7SdVNkfkG+fBrGD6392k6qbI/IN8+Eihg+t/dn9VR7cG+fDrpKQA3hgme/Q+pGpRNO+QRc+gq1NERiFKq5nlMr7BtHqTTjOx5Hux5H2tjPzZBoAAAA8S2iNGczq61KAoK90boswx4tAFsdniAOcfiq84W5S09s496UcMM3VTcjZJ2yi+k5mbqpug2ydso/pOZm6qboNshwlFpEltP8AQmOT7KboIpmHHHJSB4eBUFw2Ie2tdG077WO7lp8YCjWE6S7O2UX0nMzdVTuhG07ZR/SczN1U3QbZO2cW9LzM3VTdBtBhJhNmtlJ3tSkaPS4AJuNnl008DnOEklha+IwG+Lf5ROl1vRcpznnJOkcodqsgQEBAQEBAQEBBCCVAICAgICAgICApBAQCgKAQEEKQRCUSKAQEBSCAgICAg//Z',
		description : 'Sản phẩm do Apple sản xuất',
		price : 500,
		rating : 3,
		inventory : 15
	},
	{
		id : 2,
		name : 'Samsung Galaxy S7',
		image : 'data:image/jpeg;base64,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',
		description : 'Sản phẩm do Samsung sản xuất',
		price : 300,
		rating : 4,
		inventory : 20
	},
	{
		id : 3,
		name : 'Oppo F1s',
		image : 'data:image/jpeg;base64,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',
		description : 'Sản phẩm do China sản xuất',
		price : 450,
		rating : 1,
		inventory : 5
	},
];

const products = (state = initialState, action) => {
	switch(action.type) {
		default:
			return [...state];
	}
}

export default products;