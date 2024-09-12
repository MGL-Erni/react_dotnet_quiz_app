USE [QuizDB]
GO

-- Delete all records from the Questions table
DELETE FROM [dbo].[Questions]
GO

-- Reset the identity column (if applicable)
DBCC CHECKIDENT ('[dbo].[Questions]', RESEED, 0)
GO