#include <iostream>
using namespace std;

double min (double array[], int size) {
double m = array[0];
for(int i=0;i<size;i++){
if(m > array[i])
m = array[i];
}
return m;
}
double max (double array[], int size) {
double m = array[0];
for(int i=0;i<size;i++){
if(m < array[i])
m = array[i];
}
return m;
}
int main()
{
double a[15];
cout<<"Enter 15 numbers: "<<endl;
for(int i=0;i<15;i++) {
cin >> a[i];
}
cout<<"Min: "<<min(a, 15)<<endl;
cout<<"Max: "<<max(a, 15)<<endl;
return 0;
}