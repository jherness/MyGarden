Use MyGarden
Go



Create Login Yonatan_H With Password = 'Yon1996', Check_Policy = OFF
Go
Create Login Amit_S With Password = 'Ama1996', Check_Policy = OFF
Go


Exec sp_grantdbaccess Yonatan_H, 'db_admin_yona'
Go
Exec sp_grantdbaccess Amit_S, 'db_admin_amit'
Go


Exec sp_addrole 'Admin'
Go

Exec sp_addrolemember 'Admin', 'db_admin_yona'
Go
Exec sp_addrolemember 'Admin', 'db_admin_amit'
Go

EXEC sp_helprolemember 'Admin'



Grant Connect To db_admin_amit
Go
Grant Connect To db_admin_yona
Go


Grant All 
On Users
To Admin
Go

Grant All 
On [dbo].[Activation_Reason]
To Admin
Go

Grant All 
On [dbo].[Future_activation_Times]
To Admin
Go

Grant All 
On [dbo].[Handle_expection]
To Admin
Go

Grant All 
On [dbo].[History_And_Reason]
To Admin
Go
