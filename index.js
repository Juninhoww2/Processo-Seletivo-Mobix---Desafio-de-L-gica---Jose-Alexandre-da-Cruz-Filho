<script>
	function pattern( rows_no)
	{
		let i, j, k;

		for (i = 1; i <= rows_no; i++)
		{

			for (k = 1; k < i; k++)
				document.write("");
        
			for (j = i; j <= rows_no; j++)
				document.write(j + " ");

			document.write("<br/>");
		}
    
		for (i = rows_no - 1; i >= 1; i--)
		{
		
			for (k = 1; k < i; k++)
				document.write("");

			for (j = i; j <= rows_no; j++)
				document.write(j + " ");

			document.write("<br/>");
		}
	}

	let rows_no = 20;
	pattern(rows_no);

</script>
