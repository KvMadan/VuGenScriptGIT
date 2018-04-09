//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : Demo REST Based Script with Version Controlled
//"                      
//" Script Date        : Sun Aug 20 10:56:52 2017
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.setSocketsOption('SSL_VERSION', '2&3');
	
	lr.thinkTime(5);

	web.url(
		{
			name : 'reqres.in', 
			url : 'https://reqres.in/', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't1.inf', 
			mode : 'HTML'
		}
	);

	web.addCookie('__cfduid=dfd052b0ffc987496cc53519fa41bbf7f1503206380; DOMAIN=reqres.in');

	web.customRequest(
		{
			name : 'users', 
			url : 'https://reqres.in/api/users?page=2', 
			method : 'GET', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't2.inf', 
			mode : 'HTML', 
			encType : 'application/json'
		}
	);

	web.addCookie('_ga=GA1.2.950692846.1503206400; DOMAIN=reqres.in');

	web.addCookie('_gid=GA1.2.1026231860.1503206400; DOMAIN=reqres.in');

	lr.thinkTime(51);
	web.customRequest(
		{
			name : '2', 
			url : 'https://reqres.in/api/users/2', 
			method : 'GET', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't3.inf', 
			mode : 'HTML'
		}
	);

	lr.thinkTime(5);
	lr.startTransaction('1_transaction');

	web.customRequest(
		{
			name : 'unknown', 
			url : 'https://reqres.in/api/unknown', 
			method : 'GET', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't4.inf', 
			mode : 'HTML'
		}
	);

	lr.endTransaction('1_transaction', lr.AUTO);

	lr.thinkTime(8);
	lr.startTransaction('2_transaction');

	web.customRequest(
		{
			name : 'users_2', 
			url : 'https://reqres.in/api/users', 
			method : 'POST', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't5.inf', 
			mode : 'HTML', 
			encType : 'application/json', 
			body : '{\"name\":\"morpheus\",\"job\":\"leader\"}'
		}
	);

	lr.endTransaction('2_transaction', lr.AUTO);

	lr.thinkTime(8);
	lr.startTransaction('3_transaction');

	web.customRequest(
		{
			name : '2_2', 
			url : 'https://reqres.in/api/users/2', 
			method : 'PUT', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't6.inf', 
			mode : 'HTML', 
			body : '{\"name\":\"morpheus\",\"job\":\"zion resident\"}'
		}
	);

	lr.endTransaction('3_transaction', lr.AUTO);

	lr.thinkTime(17);
	lr.startTransaction('4_transaction');

	web.customRequest(
		{
			name : 'users_3', 
			url : 'https://reqres.in/api/users?delay=3', 
			method : 'GET', 
			targetFrame : '', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : 'https://reqres.in/', 
			snapshot : 't7.inf', 
			mode : 'HTML', 
			encType : 'application/json'
		}
	);

	lr.endTransaction('4_transaction', lr.AUTO);

	return 0;
}

