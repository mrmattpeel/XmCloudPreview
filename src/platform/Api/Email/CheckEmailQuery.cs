using GraphQL.Types;
using Sitecore.Services.GraphQL.Schemas;

namespace XmCloudPreview.Api.Email
{
    public class CheckEmailQuery : RootFieldType<CheckEmailGraphType, CheckEmailResponse>
    {
        public CheckEmailQuery(): base(name: "verifyEmail", description: "Verifies if the submitted email has already been registered")
        {
        }

        /// <summary>s
        /// This is where our external API data would be gathered
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        protected override CheckEmailResponse Resolve(ResolveFieldContext context)
        {
            return new CheckEmailResponse { EmailAlreadyInUse = true };
        }
    }
}