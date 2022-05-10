using System.Collections.Generic;
using GraphQL.Types;
using Sitecore.Services.GraphQL.Schemas;

namespace XmCloudPreview.Api.Email
{
    public class CheckEmailExists : SchemaProviderBase
    {
        public override IEnumerable<FieldType> CreateRootQueries()
        {
            yield return new CheckEmailQuery();  
        }
    }
}