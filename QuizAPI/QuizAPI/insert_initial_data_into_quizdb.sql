USE [QuizDB]
GO
SET IDENTITY_INSERT [dbo].[Questions] ON 
GO
-- Make sure to use 0-index for correct answer specification! Avoid OBOE in app checking!
-- Question 1
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('2331940a-6199-4999-9713-32d56d35e53b', N'Which protocol is used to send emails?', NULL, N'HTTP', N'SMTP', N'FTP', N'SSH', 1)
GO
-- Question 2
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('58c8808a-6968-41a0-8f79-bf32b4140bb9', N'What does RAM stand for?', NULL, N'Readily Available Memory', N'Read Access Memory', N'Read-Only Memory', N'Random Access Memory', 3)
GO
-- Question 3
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('a6d9ad5e-9e18-4a78-a298-d2e0d0ebe839', N'Which of the following is a version control system?', NULL, N'Git', N'JIRA', N'Slack', N'Trello', 0)
GO
-- Question 4
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('d3ff3c06-4b0e-46dd-b455-aa8c277dc125', N'What is the primary function of a firewall?', NULL, N'To monitor network traffic', N'To prevent unauthorized access', N'To manage user accounts', N'To store data', 1)
GO
-- Question 5
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('553ba358-0a6c-48d5-b898-2dda61d35126', N'Which of the following is a relational database management system?', NULL, N'MongoDB', N'MySQL', N'Neo4j', N'Cassandra', 1)
GO
-- Question 6
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('6c148c15-11ba-4305-8bed-005cb2d01438', N'What does the acronym "URL" stand for?', NULL, N'Uniform Resource Locator', N'Universal Resource Link', N'Uniform Resource Link', N'Universal Resource Locator', 0)
GO
-- Question 7
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('f77ab16f-2fc3-42bc-b443-dbb4b37a0b91', N'Which programming language is primarily used for Android app development?', NULL, N'Java', N'Swift', N'Python', N'Ruby', 0)
GO
-- Question 8
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('31ea47eb-cd7b-4388-b9aa-e0d6c060fde7', N'What is the main purpose of an IP address?', NULL, N'To identify a device on a network', N'To encrypt data', N'To manage user permissions', N'To store files', 0)
GO
-- Question 9
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('77570417-1464-465d-a629-5495301d8425', N'Which of the following is an example of a NoSQL database?', NULL, N'PostgreSQL', N'SQL Server', N'MongoDB', N'Oracle', 2)
GO
-- Question 10
INSERT [dbo].[Questions] ([QnId], [QnInWords], [ImageName], [Option1], [Option2], [Option3], [Option4], [Answer]) 
VALUES ('91fe4051-6dc2-4f0b-92fc-2bc46d38d44f', N'What does "HTTP" stand for?', NULL, N'HyperText Transfer Protocol', N'HyperText Transmission Protocol', N'HyperText Transfer Program', N'HyperText Transmission Program', 0)
GO
SET IDENTITY_INSERT [dbo].[Questions] OFF
GO