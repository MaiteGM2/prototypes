Exercise: Vehicle System
Objective: Create a class system for different types of vehicles using prototypes. You must implement a vehicle hierarchy and add methods through prototypes.

Create the base prototype Vehicle:
The constructor of Vehicle must receive the following parameters:
make (string)
model (string)
maxspeed (number)

Methods:
accelerate(speed): Increases the speed of the vehicle.
stop(): Stops the vehicle (speed = 0).
showInfo(): Displays the vehicle information (make, model, maximum speed).
9:52

Create a prototype Car that inherits from Vehicle:
The constructor of Car must receive, in addition to the parameters of Vehicle, the number of doors (doors).

Methods:
openDoors(): Displays a message indicating that the doors are open.
Create a prototype Motorcycle that inherits from Vehicle:
The constructor of Motorcycle must receive, in addition to the parameters of Vehicle, whether or not it has a sidecar (sidecar).

Methods:
showSidecar(): Shows whether or not the motorcycle has a sidecar.

Tests:
Instantiate several Car and Motorcycle objects, display their information and use the inherited methods.
Make the vehicles "accelerate" and "stop".
Implement a compareSpeed(anotherVehicle) method in Vehicle that compares the maximum speed between two vehicles and returns which one is faster.

Commit and upload to github. The neatness of the commits will be evaluated.
