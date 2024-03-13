using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FactoryControl.Dto
{
    public class FactoryDto
    {
        public class Update
        {
			public int Id { get; set; }
			public string Timestamp { get; set; }
			public int Price { get; set; }
			public string Message { get; set; }
		}
    }
}
