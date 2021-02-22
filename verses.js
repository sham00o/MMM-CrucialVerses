const verses =  ["1 Tim. 2:4", "1 Tim. 2:4", "1 Tim. 2:4", "John 17:17", "John 8:32", "Eph. 1:13", "Col. 1:5", "2 Thes. 2:13", "James 1:18", "2 Tim. 2:15", "2 Thes. 2:10", "Prov. 23:23", "1 Pet. 1:22", "3 John 4", "2 Tim. 3:17", "1 John 1:6", "2 Pet. 1:12", "1 Tim. 3:15", "2 Tim. 3:16", "2 Pet. 1:21", "Matt. 4:4", "Psa. 119:105", "Eph. 3:3", "Eph. 3:5", "Heb. 1:1", "Heb. 1:2", "Psa. 119:140", "1 Pet. 1:24", "1 Pet. 1:25", "Matt. 24:35", "Matt. 5:18", "Isa. 40:22", "Luke 24:27", "Luke 24:44", "Rom. 10:8", "Rom. 10:17", "1 Pet. 1:23", "John 6:68", "John 6:63", "Heb. 4:12", "James 1:21", "Psa. 119:103", "1 Pet. 2:2", "Acts 20:32", "Eph. 5:26", "John 1:1", "John 1:14", "Isa. 55:11", "Isa. 11:9", "1 Cor. 8:4", "Deut. 6:4", "Isa. 45:5", "Exo. 3:14", "Exo. 3:16", "Rev. 1:8", "John 17:3", "1 Thes. 1:9", "1 Tim. 6:16", "1 Tim. 1:17", "Psa. 90:2", "Gen. 1:1", "Rev. 4:11", "Psa. 33:9", "Rom. 4:17", "Rom. 1:20", "John 4:24", "1 John 4:16", "1 John 1:5", "Eph. 4:18", "John 17:22", "1 Pet. 1:6", "2 Tim. 4:8", "Psa. 89:14", "1 Cor. 1:9", "Isa. 6:8", "Matt. 28:19", "1 Cor. 8:6", "Heb. 1:8", "Acts 5:3", "Acts 5:4", "Isa. 9:6", "Heb. 7:3", "Micah 5:2", "Heb. 9:14", "Matt. 3:16", "Matt. 3:17", "John 14:11", "John 14:10", "John 10:30", "John 8:29", "John 14:26", "John 15:25", "John 16:15", "Eph. 2:18", "2 Cor. 13:14", "Num. 6:24", "Num. 6:25", "Num. 6:26", "Eph. 1:9", "Eph. 1:1", "Eph. 3:11", "Eph. 1:10", "Eph. 3:9", "1 Tim. 1:4", "1 John 3:2", "Gen. 1:26", "Gen. 2:9", "John 4:14", "Rom. 8:10", "Rom. 8:6", "Rom. 8:11", "1 Cor. 6:17", "1 John 4:13", "Eph. 3:17", "Eph. 3:18", "Eph. 3:19", "Col. 2:10", "Eph. 3:2", "Eph. 3:7", "Eph. 3:8", "Col. 1:25", "Rom. 9:5", "Col. 2:9", "Col. 1:19", "John 1:16", "Heb. 1:3", "Col. 1:15", "Col. 1:16", "Col. 1:17", "Col. 1:18", "John 20:31", "1 Tim. 3:16", "Rom. 8:3", "1 Tim. 2:5", "Gen. 3:15", "Gal. 3:16", "Rom. 1:3", "Rom. 1:4", "Matt. 1:21", "Matt. 1:23", "Heb. 2:17", "Heb. 4:15", "John 1:18", "Phil. 2:6", "Phil. 2:7", "Phil. 2:8", "Heb. 2:14", "Acts 2:23", "1 Pet. 2:24", "Isa. 53:5", "Isa. 53:6", "John 1:29", "1 Cor. 5:7", "John 3:14", "Rom. 6:6", "Gal. 5:24", "Col. 1:20", "Eph. 2:15", "John 12:24", "John 19:34", "2 Tim. 1:10", "Acts 3:15", "Acts 13:33", "1 Cor. 15:45", "1 Pet. 1:3", "Rev. 1:5", "Eph. 1:20", "Eph. 1:21", "Eph. 1:22", "Acts 2:36", "Rev. 5:5", "Heb. 12:24", "Heb. 7:22", "Eph. 4:8", "1 Pet. 2:4", "Isa. 28:16", "Isa. 8:14", "Dan. 2:35", "Heb. 6:20", "Heb. 7:25", "Rev. 1:13", "Matt. 17:5", "Col. 1:12", "1 Cor. 10:4", "Col. 2:16", "Col. 2:17", "1 Cor. 1:24", "1 Cor. 1:30", "John 7:38", "John 7:39", "Rev. 22:17", "Gal. 3:14", "John 14:17", "John 14:20", "Matt. 1:18", "Luke 3:22", "John 20:22", "Gal. 5:25", "Acts 1:8", "Zech. 4:6", "Gen. 1:2", "1 Cor. 2:11", "Ezek. 11:5", "Matt. 1:20", "Rom. 8:2", "John 16:13", "Acts 16:7", "Rom. 8:9", "Phil. 1:19", "Phil. 1:20", "Phil. 1:21", "2 Cor. 3:17", "2 Cor. 3:18", "1 John 2:27", "Rev. 1:4", "John 16:8", "John 3:6", "Rom. 8:16", "Rom. 8:15", "Rom. 8:14", "1 Pet. 1:2", "1 Cor. 6:11", "Rom. 6:19", "1 Cor. 2:12", "Rom. 8:13", "Eph. 3:16", "Rom. 8:26", "Eph. 1:14", "John 3:16", "Mark 16:16", "Acts 16:31", "Eph. 2:5", "Eph. 2:8", "Eph. 1:4", "Eph. 1:5", "Eph. 1:3", "Eph. 1:11", "Jer. 2:13", "John 16:9", "Rom. 3:23", "Rom. 5:12", "Rom. 6:23", "2 Cor. 4:6", "Eph. 2:12", "Eph. 2:13", "Eph. 2:17", "Acts 10:43", "Isa. 1:18", "John 1:12", "Gal. 3:24", "Gal. 3:5", "Eph. 2:6", "John 5:24", "1 John 5:12", "1 John 5:13", "1 John 3:14", "Psa. 51:12", "Isa. 12:2", "Gal. 4:6", "Gal. 4:7", "1 John 5:4", "Eph. 4:6", "Col. 1:27", "2 Tim. 1:14", "Phil. 2:15", "Matt. 5:14", "Matt. 5:16", "Matt. 5:13", "2 Tim. 1:9", "Phil. 3:20", "Matt. 24:42", "Titus 2:13", "2 Pet. 3:8", "2 Pet. 3:9", "1 Cor. 15:52", "2 Cor. 5:10", "Rev. 14:4", "Rev. 12:5", "Rev. 2:10", "Rev. 3:8", "Eph. 3:10", "Acts 17:24", "Col. 2:2", "Eph. 3:4", "Eph. 5:32", "Eph. 2:10", "Rom. 16:2", "Matt. 16:18", "Gen. 2:22", "Gen. 2:23", "Eph. 1:23", "Eph. 2:19", "Eph. 2:21", "Eph. 2:22", "Psa. 36:8", "Eph. 5:25", "Col. 3:10", "Col. 3:11", "Eph. 6:13", "Rev. 1:20", "Matt. 18:17", "Matt. 18:18", "Matt. 18:19", "1 Cor. 1:2", "Rom. 16:16", "1 Cor. 14:34", "Deut. 16:16", "Acts 14:23", "Titus 1:5", "Rev. 1:2", "Acts 5:42", "Acts 2:42", "Acts 20:7", "Heb. 2:12", "Acts 4:31", "Phil. 1:1", "Acts 20:17", "Acts 20:28", "Acts 13:1", "Rev. 2:6", "1 Cor. 14:26", "1 Cor. 14:4", "Psa. 133:1", "Psa. 133:2", "Psa. 133:3", "Rev. 3:7", "1 Cor. 8:1", "1 Cor. 12:31", "1 Cor. 13:13", "Heb. 12:22", "Heb. 12:23", "Eph. 4:4", "Eph. 4:5", "1 Cor. 12:13", "Eph. 2:14", "Eph. 2:16", "1 Cor. 12:12", "Rom. 12:4", "Rom. 12:5", "1 Cor. 12:22", "1 Cor. 12:24", "1 Cor. 12:25", "1 Cor. 12:26", "Eph. 4:11", "1 Cor. 12:28", "Rom. 12:6", "Eph. 4:7", "Eph. 4:12", "Eph. 4:13", "Eph. 4:14", "Eph. 4:15", "Eph. 4:16", "Col. 2:19", "1 Cor. 10:16", "1 Cor. 10:17", "Rom. 12:3", "1 Cor. 1:12", "1 Cor. 1:10", "Rom. 15:6", "Rom. 15:7", "Eph. 4:3", "Rom. 16:17", "Col. 1:24", "Matt. 6:33", "Matt. 6:10", "Matt. 6:13", "Rom. 14:17", "Luke 17:21", "Matt. 13:37", "Mark 4:14", "Mark 1:15", "John 3:3", "John 3:5", "Mark 4:26", "Mark 4:27", "2 Pet. 1:4", "2 Pet. 1:11", "Col. 1:13", "Acts 26:18", "Dan. 4:26", "Matt. 5:3", "Matt. 16:19", "Matt. 12:28", "Eph. 6:12", "Isa. 14:13", "Eph. 6:11", "Rom. 13:12", "Neh. 4:17", "Num. 10:35", "Rev. 1:6", "Heb. 12:28", "1 Thes. 2:12", "Matt. 7:21", "Acts 14:22", "2 Tim. 2:12", "Rev. 12:10", "Rev. 12:11", "Rev. 19:8", "Dan. 2:34", "Rev. 11:15", "Rev. 20:6", "Rev. 21:1", "Rev. 21:2", "Rev. 21:5", "Rev. 21:9", "Rev. 21:10", "Rev. 1:12", "John 2:19", "John 2:21", "John 14:2", "John 14:23", "Rom. 8:29", "Heb. 2:10", "Rev. 21:7", "Rev. 4:3", "Rev. 21:11", "Rev. 21:18", "Gal. 4:26", "Heb. 11:10", "2 Cor. 5:17", "Rev. 21:3", "1 Cor. 3:16", "Rev. 21:22", "Rev. 3:12", "Rev. 21:12", "Rev. 21:14", "Rev. 21:21", "Rev. 21:19", "Rev. 21:16", "Rev. 21:17", "Rev. 22:1", "Rev. 22:2", "Rev. 22:14", "Rev. 21:23", "Psa. 36:9", "John 1:4", "John 11:25", "John 14:6", "Col. 3:4", "2 Cor. 3:6", "John 10:28", "Heb. 7:16", "John 10:10", "John 10:11", "John 6:51", "John 6:35", "1 John 1:1", "John 5:39", "John 5:40", "Ezek. 36:26", "Phil. 2:13", "Gal. 1:15", "Gal. 1:16", "Gal. 2:20", "Gal. 4:19", "Phil. 3:9", "Rom. 6:11", "Gal. 6:14", "1 John 2:15", "Rom. 12:2", "Gal. 1:4", "Matt. 16:24", "Job 42:5", "Job 42:6", "Gen. 13:15", "2 Cor. 4:10", "2 Cor. 4:12", "Rom. 8:5", "John 8:36", "1 John 3:9", "Col. 3:15", "Rom. 8:4", "Phil. 2:12", "Heb. 10:19", "John 4:23", "1 John 1:7", "1 John 1:9", "Acts 24:16", "1 Tim. 1:5", "1 John 3:20", "1 John 1:2", "1 John 1:3", "Phil. 1:5", "Col. 3:13", "Heb. 6:1", "1 Cor. 3:6", "1 Cor. 3:1", "Heb. 5:13", "Heb. 5:14", "1 Cor. 14:20", "Rom. 10:13", "Acts 2:21", "Rom. 10:12", "Gen. 4:26", "1 Cor. 12:3", "Isa. 12:3", "Isa. 12:4", "Psa. 116:13", "Lam. 3:55", "Lam. 3:56", "Isa. 55:6", "Psa. 145:18", "Psa. 81:10", "Psa. 8:9", "Phil. 2:9", "Phil. 2:10", "Phil. 2:11", "1 Thes. 5:17", "1 Thes. 5:18", "Phil. 4:6", "Matt. 6:9", "James 5:17", "Eph. 6:18", "1 Tim. 2:8", "Heb. 4:16", "Matt. 6:6", "Dan. 6:10", "Matt. 18:20", "Mark 11:23", "Mark 11:24", "Acts 1:14", "Acts 6:4", "Col. 4:2", "Matt. 17:21", "Matt. 26:41", "Isa. 62:6", "Eph. 6:19", "Col. 1:9", "Rev. 22:20", "Matt. 9:37", "Matt. 9:38", "Ezek. 36:37", "Isa. 45:11", "Matt. 7:7", "John 15:7", "Eph. 3:20", "Eph. 6:17", "Jer. 15:16", "Psa. 34:8", "Ezek. 3:1", "Psa. 119:130", "Col. 3:16", "2 Tim. 3:15", "Acts 17:11", "2 Pet. 1:20", "Isa. 28:13", "2 Cor. 3:16", "Psa. 119:97", "Heb. 4:2", "Psa. 119:11", "Psa. 119:162", "Luke 24:45", "Neh. 8:13", "1 Cor. 2:13", "2 Pet. 1:19", "1 Tim. 5:17", "Psa. 119:147", "Psa. 57:8", "Lam. 3:22", "Lam. 3:23", "Psa. 88:13", "Mark 1:35", "Exo. 16:21", "Psa. 63:1", "2 Cor. 4:16", "Prov. 4:18", "Judg. 5:31", "Heb. 10:25", "John 10:16", "1 Cor. 14:23", "Acts 2:46", "Luke 22:19", "Luke 22:20", "1 Cor. 11:26", "Matt. 26:29", "1 Cor. 5:8", "Eph. 5:18", "Eph. 5:19", "Heb. 13:15", "Acts 16:25", "Isa. 35:10", "Matt. 26:30", "Psa. 45:1", "Matt. 21:16", "Psa. 119:164", "1 Cor. 14:31", "Num. 11:29", "1 Cor. 14:1", "1 Cor. 14:3", "1 Thes. 5:20", "1 Cor. 14:24", "1 Cor. 14:25", "2 Sam. 23:2", "John 3:34", "Acts 5:20", "2 Cor. 4:13", "1 Cor. 14:32", "2 Tim. 4:2", "Ezek. 37:10", "Acts 19:20", "Mark 12:30", "Psa. 73:25", "Rev. 2:4", "Rom. 8:28", "1 Cor. 2:9", "1 John 4:19", "2 Cor. 5:14", "1 Pet. 1:8", "Matt. 26:7", "1 Cor. 8:3", "1 John 4:21", "John 14:21", "John 21:16", "Rom. 8:35", "Rom. 8:37", "Rom. 12:11", "1 Thes. 5:19", "2 Tim. 1:6", "2 Tim. 1:7", "Rom. 1:9", "Phil. 3:3", "Gal. 5:16", "Rom. 7:6", "Prov. 20:27", "2 Tim. 4:22", "Ezra 1:5", "Gal. 6:8", "Gal. 5:22", "Gal. 5:23", "Heb. 8:12", "Psa. 51:2", "Prov. 28:13", "Luke 7:47", "Matt. 24:14", "John 15:16", "Rom. 16:25", "Rom. 1:16", "1 Cor. 9:16", "1 Cor. 9:22", "1 Cor. 1:23", "Luke 4:18", "Rom. 10:14", "Rom. 10:15", "Rom. 1:5", "Phil. 1:12", "Phil. 1:7", "2 Tim. 1:8", "Acts 20:24", "Rom. 10:9", "Rom. 10:10", "Rom. 9:23", "1 Thes. 5:23", "Zech. 12:1", "Isa. 66:1", "Isa. 66:2", "Eccl. 3:11", "Acts 17:26", "Matt. 16:26", "Rom. 7:20", "Heb. 9:27", "Eph. 2:4", "Jer. 17:9", "2 Cor. 10:5", "Psa. 90:10", "Rom. 5:8", "Rom. 8:30", "Deut. 30:19", "Acts 3:19", "Luke 13:3", "Acts 4:12", "Rom. 12:1", "1 Cor. 6:19", "1 Cor. 6:20", "Exo. 21:5", "2 Cor. 5:15", "Phil. 2:17", "Lev. 1:9", "Psa. 110:3", "Rom. 6:13", "Luke 14:26", "Mark 14:6", "Matt. 6:24", "Luke 6:38", "Matt. 6:3", "Matt. 6:4", "Mal. 3:10", "Luke 19:8", "Matt. 6:19", "Matt. 6:20", "Luke 12:34", "Luke 21:4", "1 Tim. 6:17", "Acts 20:35", "2 Cor. 9:6", "2 Cor. 9:7", "2 Cor. 8:15", "Gen. 28:22", "Matt. 22:21", "Phil. 4:18", "Phil. 4:19", "2 Cor. 8:9", "2 Cor. 8:4", "Rom. 1:17", "2 Cor. 5:7", "Heb. 11:1", "Heb. 11:6", "Heb. 3:12", "Mark 5:36", "2 Cor. 4:17", "2 Cor. 4:18", "Mark 9:23", "Matt. 19:26", "Jer. 32:27", "Rom. 4:3", "Gen. 22:14", "Exo. 6:3", "Rom. 15:13", "Isa. 45:15", "1 Pet. 5:7", "1 Cor. 10:13", "1 Pet. 1:7", "1 Pet. 1:9", "Deut. 33:25", "2 Cor. 1:20", "Rom. 10:11", "Gal. 2:19", "1 Pet. 2:21", "1 Pet. 2:23", "John 16:32", "John 5:19", "John 5:30", "John 6:38", "Luke 10:21", "John 7:18", "2 Cor. 5:9", "Phil. 3:7", "Phil. 3:8", "2 Cor. 12:9", "Phil. 4:12", "Phil. 4:13", "John 15:5", "Matt. 11:28", "Matt. 11:29", "Luke 9:24", "John 14:30", "1 John 4:7", "Eph. 5:8", "Phil. 4:5", "Matt. 20:28", "Acts 13:36", "John 12:26", "Luke 16:10", "Matt. 25:21", "Matt. 24:45", "Josh. 24:15", "1 Cor. 3:9", "1 Cor. 12:18", "1 Cor. 3:10", "1 Cor. 3:12", "1 Cor. 3:13", "1 Pet. 2:5", "1 Pet. 2:9", "Exo. 19:6", "Rom. 15:16", "1 Pet. 4:10", "Heb. 10:24", "Matt. 28:20", "Matt. 18:11", "1 Thes. 2:9", "1 Pet. 5:3", "Eph. 5:29", "1 Thes. 2:7", "1 Thes. 2:11", "Col. 1:28", "Acts 20:27", "Acts 20:20", "1 Thes. 1:3", "2 Cor. 12:15", "Col. 1:29", "1 Cor. 15:10", "Deut. 32:30", "Rev. 3:1", "Rev. 3:15", "John 15:2", "Luke 19:10", "John 13:34", "1 Cor. 12:20", "1 Cor. 12:21", "1 Cor. 12:27", "Ezek. 1:9", "John 17:11", "Phil. 1:27", "Col. 4:16", "Eph. 1:17", "Eph. 1:18", "Rev. 1:10", "Acts 26:19", "Prov. 29:18", "Hab. 3:2", "John 1:13", "1 John 3:1", "Rom. 5:10", "John 6:56", "John 6:57", "1 John 5:11", "Matt. 5:48", "1 Pet. 1:15", "1 Cor. 2:16", "Phil. 3:21", "Isa. 43:10", "Isa. 44:6", "2 Sam. 7:12", "2 Sam. 7:13", "2 Sam. 7:14", "John 20:17", "Heb. 2:11", "Rom. 11:17", "John 3:29", "John 3:30", "1 Cor. 7:25", "1 Cor. 7:40", "Phil. 3:10", "Heb. 9:15", "Isa. 7:14", "Luke 1:35", "John 8:12", "Matt. 19:14", "Isa. 42:3", "Heb. 9:12", "Heb. 9:28", "Heb. 9:26", "Heb. 2:9", "Col. 2:15", "1 Pet. 3:18", "2 Cor. 5:16", "Rev. 4:5", "Rev. 5:6", "Rev. 2:7", "Rev. 14:1", "John 14:1", "John 14:16", "John 17:21", "John 17:23", "John 16:33", "John 15:4", "Heb. 9:22", "Rom. 3:24", "1 John 4:10", "Rom. 5:2", "Heb. 13:12", "Rom. 5:18", "Titus 3:5", "Rom. 6:22", "Eph. 4:23", "Eph. 4:24", "Eph. 4:30", "Rom. 8:23", "2 Cor. 5:4", "Rom. 5:17", "Rom. 5:21", "John 12:23", "Luke 24:26", "John 14:19", "John 16:21", "John 6:29", "Heb. 9:4", "Rev. 2:17", "Psa. 27:4", "Psa. 23:6", "1 Tim. 1:3", "Col. 1:26", "Heb. 2:1", "Heb. 2:3", "Eph. 2:20", "1 Cor. 4:17", "Titus 1:9", "2 Tim. 3:10", "1 Cor. 11:1", "2 Tim. 4:7", "Jude 3", "1 Tim. 6:12", "2 Cor. 4:1", "2 Cor. 3:7", "2 Cor. 3:8", "2 Cor. 3:9", "2 Cor. 5:18", "2 Cor. 5:19", "2 Cor. 5:20", "Heb. 8:10", "Heb. 8:11", "2 Cor. 1:9", "2 Cor. 4:11", "2 Cor. 1:3", "2 Cor. 1:4", "2 Cor. 2:14", "2 Cor. 2:15", "2 Cor. 2:16", "2 Cor. 3:3", "2 Cor. 4:7", "1 Tim. 4:6", "1 Cor. 11:3", "John 4:34", "1 Cor. 11:10", "Eph. 5:24", "Rom. 13:1", "1 Sam. 15:22", "S. S. 1:2", "S. S. 1:4", "2 Cor. 11:2", "Eph. 5:27", "Hosea 2:19", "Isa. 54:5", "Rev. 19:7", "Acts 19:5", "Rom. 6:3", "Rom. 6:4", "Col. 2:12", "Gal. 3:27", "Acts 2:38", "Acts 22:16", "Gen. 2:7", "Job 33:4", "Job 32:8", "1 Pet. 3:4", "Rom. 9:1", "Psa. 139:14", "Psa. 42:5", "1 Chron. 28:9", "Heb. 10:22", "Matt. 9:4", "John 16:22", "Acts 11:23", "1 Sam. 16:7", "2 Tim. 2:21", "1 Tim. 6:11", "2 Cor. 11:10", "2 Cor. 10:13", "1 Cor. 9:27", "2 Tim. 2:6", "1 Kings 4:29", "1 Cor. 15:58", "James 5:7", "Matt. 13:6", "Matt. 5:8", "2 Cor. 1:12", "Matt. 6:22", "Eccl. 4:12", "1 Pet. 4:1", "Heb. 13:13", "1 Pet. 5:5", "Matt. 10:22", "Matt. 5:44", "Luke 9:62", "1 Thes. 4:4", "Phil. 3:12", "Phil. 3:13", "Phil. 3:14", "1 Tim. 4:7", "Luke 1:53", "Psa. 139:23", "Rev. 3:20", "Col. 3:2", "Phil. 4:4", "2 Tim. 2:4", "1 Tim. 6:10", "1 Cor. 10:26", "Phil. 4:11", "1 Tim. 2:9", "Col. 4:6", "Matt. 5:37", "2 Cor. 6:14", "1 Cor. 10:31", "Isa. 40:31", "Psa. 23:1", "1 Pet. 2:25", "Psa. 16:5", "Rev. 3:18", "Matt. 7:13", "Matt. 7:14", "Heb. 12:1", "Heb. 12:2", "1 Cor. 9:26", "1 Tim. 4:12", "Eccl. 12:1", "Eph. 5:16", "Titus 2:11", "Titus 2:12", "Dan. 11:32", "1 John 2:14", "1 John 2:17", "Luke 2:49", "Prov. 3:5", "Isa. 55:9", "Prov. 9:10", "Prov. 4:23", "Neh. 8:10", "Acts 20:34", "Matt. 10:16", "Matt. 10:16", "Matt. 10:16", "Matt. 10:16", "Matt. 10:16", "1 Tim. 2:4", "1 Tim. 2:4", "1 Tim. 2:4"]
