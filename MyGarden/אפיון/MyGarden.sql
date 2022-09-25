Create Database MyGarden
Go
Use MyGarden
Go

/*
Use master
Go
Drop database MyGarden
Go
*/


/*Tables*/

/*Users - Users table will contain only one user for security reasons*/
CREATE TABLE [dbo].[Users](
	[User_pass] Nvarchar(60) NOT NULL,--Assuming pass is already encrypted
	[User_mail] Nvarchar(60) NOT NULL,
	[User_full_name] Nvarchar(20) NULL
	Primary key([User_pass], [User_mail])

);
GO



/*Latest_Sample - Loaded by python loader*/
CREATE TABLE [dbo].[Sample_History](
	Date_of_Sample Date Not Null,
	Time_of_sample Time(7) Not Null,
	Light_data int Not Null,
	First_moist_data int Not Null,
	Second_moist_data int Not Null,
	Third_moist_data int Not Null,
	First_atmos_data Float Not Null,
	Second_atmos_data Float Not Null,
	Temperature_data int Not Null,
	Is_raining Bit Not Null,--1 = True, 0 = false
	Primary Key (Date_of_Sample, Time_of_sample)
);
GO

/*
--------Testing [Sample_History]------
INSERT INTO [Sample_History]
VALUES ('1996-11-06',
		'00:00:03',
		1, 5,10,15,1,1,1,1);

Select Top 1 * From [Sample_History] Order by Time_of_sample Desc --Getting the latest sample
Go

Select Top 10 * From [Sample_History] Order by Time_of_sample Desc --Getting the latest 10 samples
Go

Delete From [Sample_History]


Drop table Sample_History
*/


/*--------- [Activation_Reason] ---------*/


CREATE TABLE [dbo].[Activation_Reason](
	[Activation_Code] [int] NOT NULL,
	[Activiation_reason] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Activation_Reason] PRIMARY KEY CLUSTERED 
(
	[Activation_Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Activation_Reason]  WITH CHECK ADD  CONSTRAINT [FK_Activation_Reason_Activation_Reason] FOREIGN KEY([Activation_Code])
REFERENCES [dbo].[Activation_Reason] ([Activation_Code])
GO

ALTER TABLE [dbo].[Activation_Reason] CHECK CONSTRAINT [FK_Activation_Reason_Activation_Reason]
GO

ALTER TABLE [dbo].[Activation_Reason]  WITH CHECK ADD  CONSTRAINT [FK_Activation_Reason_Activation_Reason1] FOREIGN KEY([Activation_Code])
REFERENCES [dbo].[Activation_Reason] ([Activation_Code])
GO

ALTER TABLE [dbo].[Activation_Reason] CHECK CONSTRAINT [FK_Activation_Reason_Activation_Reason1]
GO

Insert Into [Activation_Reason]([Activation_Code],[Activiation_reason]) Values(
1, 'All is bad'),
(2, 'dry, pressure, hot'),
(3, 'dark, pressure, hot'),
(4, 'dark, dry, hot'),
(5, 'dark, dry, pressure'),
(6, 'dark, hot'),
(7, 'dark'),
(8, 'dark, pressure'),
(9, 'dark, dry'),
(10, 'pressure, hot'),
(11, 'dry, hot'),
(12, 'dry, pressure'),
(13, 'hot'),
(14, 'pressure'),
(15, 'dry'),
(16, 'Scheduled'),
(17, 'User define')



/*--------- [Future_activation_Times] ---------*/

CREATE TABLE [dbo].[Future_activation_Times](
	[Date_of_activation] [date] NOT NULL,
	[Start_Hour] [time](7) NOT NULL,
	[Finish_hour] [time](7) NOT NULL,
	[is_fan] [bit] NOT NULL,
	[is_water] [bit] NOT NULL,
	[is_moisture] [bit] NOT NULL,
	[is_light] [bit] NOT NULL,
	[is_ferteliz] [bit] NOT NULL,
 CONSTRAINT [PK_Future_activation_Times] PRIMARY KEY CLUSTERED 
(
	[Date_of_activation] ASC,
	[Start_Hour] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/*--------- [Handle_expection] ---------*/

CREATE TABLE [Handle_expection](
	[Exception_code] [int] NOT NULL,
	[Handle_description] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_Handle_expection] PRIMARY KEY CLUSTERED 
(
	[Exception_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

Insert Into [Handle_expection]([Exception_code],[Handle_description]) Values(
1, '[False, False, False, False]'),
(2, '[True, False, False, False]'),
(3, '[False, True, False, False]'),
(4, '[False, False, True, False]'),
(5, '[False, False, False, True]'),
(6, '[False, True, True, False]'),
(7, '[False, True, True, True]'),
(8, '[False, True, False, True]'),
(9, '[False, False, True, True]'),
(10, '[True, True, False, False]'),
(11, '[True, False, True, False]'),
(12, '[True, False, False, True]'),
(13, '[True, True, True, False]'),
(14, '[True, True, False, True]'),
(15, '[True, True, True, True]'),
(16, '[True, False, True, True])'
)

/*--------- [History_And_Reason] ---------*/

CREATE TABLE [dbo].[History_And_Reason](
	[Date_Of_Activition] [date] NOT NULL,
	[Start_hour] [time](7) NOT NULL,
	[Finish_hour] [time](7) NOT NULL,
	[Activiation_code] [int] NOT NULL,
	[Expeption_code] [int] NOT NULL,
 CONSTRAINT [PK_History_And_Reason] PRIMARY KEY CLUSTERED 
(
	[Date_Of_Activition] ASC,
	[Start_hour] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*Querys*/


 Create Function GetLatestTenSamples() -- Getting last 10 samples 
 Returns Table
 As
 Return (Select Top 10 * From Sample_History order by Date_of_Sample, Time_of_sample Desc)
 Go
 /*
 Select * From GetLatestTenSamples()
 Go
 */


Create VIEW [dbo].[V_CalcMoistAvg]-- View that claculates moist sensors avg, from 3 sensors
AS
SELECT (AVG(First_moist_data) + AVG(Second_moist_data) + AVG(Third_moist_data)) / 3 AS MoistAvg
FROM  dbo.GetLatestTenSamples() AS AvgOfMoist
GO

/*
Select * From [V_CalcMoistAvg]
Go
*/


Create VIEW [dbo].[V_CalcAtmosAvg]-- View that claculates Atmospheric pressure sensors avg, from 2 sensors
AS
SELECT (AVG(First_atmos_data) + AVG(Second_atmos_data)) / 2 as AtmosAvg 
FROM  dbo.GetLatestTenSamples() AS AvgOfAtmos
GO

/*
Select * From V_CalcAtmosAvg
Go
*/


Create VIEW [dbo].[V_CalcTempAvg]-- View that claculates Temp sensor avg
AS
SELECT AVG(Temperature_data) AS TempAvg
FROM  dbo.GetLatestTenSamples() AS AvgOfTemp
GO

/*
Select * From [V_CalcTempAvg]
Go
*/


Create VIEW [dbo].[V_CalcLightAvg]-- View that claculates Light sensor avg
AS
SELECT AVG(Light_data) AS LightAvg
FROM  dbo.GetLatestTenSamples() AS AvgOfLight
GO

/*
Select * From [V_CalcLightAvg]
Go
*/


/*Multi statment function that returns a table of all Avg of the last 10 Samples.
Using this table we will commit querys beacuse we cant turn relays ON/OFF based only on one sample - it will be inacurrate.*/
Create Function Func_CreateAvgTable()
Returns @AvgTbl Table(
Light_Avg float,
Moist_Avg float ,
Atmos_Avg float,
Temp_Avg float
)
As
begin
	Declare @Light_Avg float = (Select LightAvg From dbo.V_CalcLightAvg)
	Declare @Moist_Avg float = (Select MoistAvg From dbo.V_CalcMoistAvg)
	Declare @Atmos_Avg float = (Select AtmosAvg From dbo.V_CalcAtmosAvg)
	Declare @Temp_Avg float = (Select TempAvg From dbo.V_CalcTempAvg)
	Insert Into @AvgTbl Values(@Light_Avg, @Moist_Avg, @Atmos_Avg, @Temp_Avg)
	Return  
end
go 
/*
Select * From dbo.Func_CreateAvgTable()
*/



/*Is_Day? 0 = False, 1 = True*/
Create View [dbo].[V_AnalazeLightData]
as
SELECT 
CASE 
      WHEN Light_Avg > 4500 Then 1
	  When Light_Avg Is Null Then Null
	  Else 0
END as Is_Sunlight FROM dbo.Func_CreateAvgTable()
Go

/*
Select * From V_AnalazeLightData
*/


/*Is Moist Enough? 0 = dry, 1 = wet*/
Create View [dbo].[V_AnalazeMoistData]
as
SELECT
CASE 
	WHEN Moist_Avg < 25 THEN 0
	When Moist_Avg Is Null Then Null
    Else 2
END as Is_Moist FROM dbo.Func_CreateAvgTable()
Go

/*
Select * From [V_AnalazeMoistData]
*/


/*Is atmosphiric pressure valid? 0 = False, 1 = True*/
--Will only occur in extreme weather, Not testable
Create View [dbo].[V_AnalazeAtmosData]
as
SELECT 
CASE
	  WHEN Atmos_Avg BETWEEN 1000.25 AND 1018.25 THEN 1
	  When Atmos_Avg Is Null Then Null
      Else 0
END as Is_Atmos FROM dbo.Func_CreateAvgTable()
Go

/*
Select * From [V_AnalazeAtmosData]
*/


/*Is Temp comftroble? 0 = False, 1 = True*/
Create View [dbo].[V_AnalazeTempData]
as
SELECT 
CASE 
	  WHEN Temp_Avg < 10 Then 0
      WHEN Temp_Avg BETWEEN 10 AND 35 THEN 1 
	  When Temp_Avg Is Null Then Null
	  Else 2
END as Is_Temp FROM dbo.Func_CreateAvgTable()
Go

/*Multi statment function that returns an array, with each cell representing if:
Light data is valid, Moist data is valid, atmosphiric pressure data is valid or Temp data is valid, Respactivly.
Based on the last 10 sample avg.*/
 CREATE FUNCTION  Func_GetAnalyzedSamples ( )  
  RETURNS @Analyzed_Samples TABLE                  
    ( Is_Sunlight int, Is_Moist int, Is_Atmos int, Is_Temp int )
  AS 
  BEGIN
     INSERT  @Analyzed_Samples                
     SELECT Is_Sunlight, [V_AnalazeMoistData].Is_Moist, V_AnalazeAtmosData.Is_Atmos, V_AnalazeTempData.Is_Temp
	 FROM V_AnalazeLightData, [V_AnalazeMoistData], V_AnalazeAtmosData, V_AnalazeTempData
     RETURN
  END
  GO

/*
 SELECT * FROM dbo.Func_GetAnalyzedSamples()
 GO
 */



 /*The Server will recive an array True and False and will open the releys accordingly*/
Create View [dbo].[HandleNewSample]
as
SELECT 
CASE 
	When Is_Sunlight = 0 AND Is_Moist = 0 AND Is_Atmos = 0 AND Is_Temp = 0
		Then 1
	When Is_Sunlight = 1 AND Is_Moist = 0 AND Is_Atmos = 0 AND Is_Temp = 0
		Then 2
	When Is_Sunlight = 0 AND Is_Moist = 1 AND Is_Atmos = 0 AND Is_Temp = 0
		Then 3
	When Is_Sunlight = 0 AND Is_Moist = 0 AND Is_Atmos = 1 AND Is_Temp = 0
		Then 4
	When Is_Sunlight = 0 AND Is_Moist = 0 AND Is_Atmos = 0 AND Is_Temp = 1
		Then 5
	When Is_Sunlight = 0 AND Is_Moist = 1 AND Is_Atmos = 1 AND Is_Temp = 0
		Then 6
	When Is_Sunlight = 0 AND Is_Moist = 1 AND Is_Atmos = 1 AND Is_Temp = 1
		Then 7
	When Is_Sunlight = 0 AND Is_Moist = 1 AND Is_Atmos = 0 AND Is_Temp = 1
		Then 8
	When Is_Sunlight = 0 AND Is_Moist = 0 AND Is_Atmos =1 AND Is_Temp = 1
		Then 9
	When Is_Sunlight = 1 AND Is_Moist = 1 AND Is_Atmos = 0 AND Is_Temp = 0
		Then 10
	When Is_Sunlight = 1 AND Is_Moist = 0 AND Is_Atmos = 1 AND Is_Temp = 0
		Then 11
	When Is_Sunlight = 1 AND Is_Moist = 0 AND Is_Atmos = 0 AND Is_Temp = 1
		Then 12
	When Is_Sunlight = 1 AND Is_Moist = 1 AND Is_Atmos = 1 AND Is_Temp = 0
		Then 13
	When Is_Sunlight = 1 AND Is_Moist = 1 AND Is_Atmos = 0 AND Is_Temp = 1
		Then 14
	When Is_Sunlight = 1 AND Is_Moist = 1 AND Is_Atmos = 1 AND Is_Temp = 1 --The Best! no exception
		Then 15
	When Is_Sunlight = 1 AND Is_Moist = 0 AND Is_Atmos = 1 AND Is_Temp = 1 
		Then 15
	Else  Null --If null is returned then there is a problem with one of the sesors
END as Operation_Code FROM dbo.Func_GetAnalyzedSamples()
Go



Create Trigger HandleNewSampleInsertation
On [dbo].[Sample_History] AFTER INSERT AS
Begin
	Declare @Operation_Code int
	Declare @Is_Raining bit
	Select @Is_Raining = Is_raining From Sample_History order by Time_of_sample, Date_of_Sample Desc
	if(@Is_Raining = 0)--if its raining there is no point in activating system
	Begin
	Select @Operation_Code = Operation_Code From [dbo].[HandleNewSample]
	Select [Handle_description] From [dbo].[Handle_expection] Where 
		@Operation_Code = [Exception_code]
	End
	/*TODO: Code to send the according to its corresponding value in the Exception table
	And send commend to Server*/
End
GO

/*
Select * From [dbo].[HandleNewSample]
*/