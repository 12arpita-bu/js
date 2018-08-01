var arr = [ "1", "2", "2", "2", "2", "6", "7", "1", "9", "1"];
var i,mynumber = 10;
arr.sort();
var max_count=0, curr=1, max_no;
for(i=1;i<mynumber;i++)
{
	if(arr[i]==arr[i-1])
	{
		curr++;
	}
	else
	{
		if(curr>max_count)
		{
			max_count=curr;
			max_no=arr[i-1];
		}
	}
}
print(max_no);
// var arr = [];
// for(var i=1; i<=mynumber; i++) {
//    arr.push(i.toString());
// }

// your code goes here